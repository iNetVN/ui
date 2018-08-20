require('events').EventEmitter.defaultMaxListeners = 0;

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var zip = require('gulp-zip');
var exec = require('child_process').exec;
var fs = require('fs');

var distFolder = "dist";
var moduleName = "starter";
var buildDir = 'dist/build';


gulp.task('clean', function (cb) {
    return del([
        distFolder
    ], cb);
});

gulp.task('replaceHTML', function () {
    var files = fs.readdirSync(distFolder);
    var indexPath = buildDir + '/page/index.html';
    var indexData = fs.readFileSync(indexPath, 'utf-8');
    files.forEach(function (fileName) {
        var filePrefix = fileName.split('.')[0];
        if (filePrefix) {
            fileName = fileName.replace(/\.css$/, '');
            indexData = indexData.replace('{' + filePrefix + '}', fileName);
        }
    });
    fs.writeFileSync(indexPath, indexData, 'utf-8');
});

gulp.task('replaceVersion', function () {
    var profilePath;
    var files = fs.readdirSync(buildDir);
    for (var i = 0; i < files.length; i++) {
        if (files[i].endsWith('.profile')) {
            profilePath = buildDir + '/' + files[i];
            break;
        }
    }
    var profileData = fs.readFileSync(profilePath, 'utf-8');
    profileData = profileData.replace('{version}', new Date().getTime());
    fs.writeFileSync(profilePath, profileData, 'utf-8');
});

gulp.task('build', function (cb) {
    var ng = exec('ng build --aot --prod --named-chunks', {maxBuffer: 1024 * 2048}, function (err, stdou, stderr) {
        gulp.start('package');
        cb();
    });
    ng.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    ng.stderr.on('data', function (data) {
        console.log(data.toString());
    });
});

gulp.task('package', function (cb) {

    runSequence('copy-resource', 'change-path-chunk', 'replaceVersion', 'replaceHTML', function () {
        gulp.src([buildDir + '/**'])
            .pipe(zip(moduleName + '.zip'))
            .pipe(gulp.dest(distFolder + '/target')).on('end', cb)
    });
});

gulp.task('copy-resource', function () {
    return gulp.src(['icloud/**']).pipe(gulp.dest(buildDir))
});

gulp.task('change-path-chunk', function () {
    var files = fs.readdirSync(distFolder);
    var inlineFile;

    // Find inline file
    for (var  i =0; i < files.length; i++) {
        if (files[i].startsWith('runtime.')) {
            inlineFile = files[i];
            break;
        }
    }

    // Change path load chunk file
    var inlinePath = distFolder + '/' + inlineFile;
    var inlineData = fs.readFileSync(inlinePath, 'utf-8');

    // build with: ng build --aot --prod
    var strSplit = '.src=';
    var dataSplit = inlineData.split(strSplit);

    dataSplit[1] = dataSplit[1].replace(/return\s.*?\+/, 'return iNet.jsFolder+');

    inlineData = dataSplit.join(strSplit);

    // Replace inline content
    fs.writeFileSync(inlinePath, inlineData, 'utf-8');

    gulp.src('dist/*.css').pipe(gulp.dest(buildDir + '/css'));

    return gulp.src('dist/*.js').pipe(gulp.dest(buildDir + '/js'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', function () {
    runSequence('clean', 'build');
});
