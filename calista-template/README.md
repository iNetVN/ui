### Tasks to do for running the project:
Calista UI template
===
Calista UI Template is a layout built with Angular 6 for Beginners

Project is a creative bootstrap design admin template built with Angular 6.
With this, you get all you need to start working on your COLLABORATION, HRM, CRM or dashboard ... based project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.

- Angular 6.0.0
- TypeScript 2.7
- RxJS 6.2.0
- iNet Core 0.5.3
- iNet UI 0.5.3
- Bootstrap 4 
- ngx-bootstrap 3.0.0

Features
===
- CAS Authentication
- Integrate with iCloud Platform modules
- Bootstrap UI
![Bootstrap UI ](http://cdn.inetcloud.vn/data/api/git/bs-ui.png?v=1)

Build
===

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher

**1.	Install npm from this site for your appropriate OS:  https://nodejs.org/en/download/**

**2.	Go to your project directory**


- Prepare Angular CLI and Typescript
```
npm install -g @angular/cli

npm install -g typescript

npm install
```

**3.	Start the server using the command**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Example Run `ng generate component pages/marketplace` to create a new page is Marketplace

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Build module for iCloud PlatForm

- Prepare  
```
sudo npm i -g bower gulp-cli
```
Run `gulp` to build the project for a module.

##  Fake REST API
Install and start JSON Server 
```
npm install -g json-server
```
```
json-server --watch db.json
```
## iNet Developer Tool - Chrome Extension

Use extension to access remote server and prevent CORS when develop on localhost. 

- Install extension 
``` 
https://chrome.google.com/webstore/detail/inet-developer-tool/hgmdmgbfllloocljiffneifcepeafkpg
```
- Config server domain and start: calista.inetcloud.vn,inetcloud.vn


Contributors:
===
- Vy Nguyen <ntvy@inetcloud.vn>