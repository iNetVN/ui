import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {CoreService} from 'inet-core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    name: string;
    animals = [{type: 'cat'}, {type: 'dog'}];
    selectedAnimal: any;

    constructor(private coreService: CoreService
    ) {
        console.log(this.coreService.getEnvironment());
        this.selectedAnimal = this.animals[0];
        this.test(function(){
            console.log('callback')
        });
    }

    byAnimal(item1) {
        return item1.type == 'dog';
    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {

    }

    test(fn?: Function) {
        console.log('test ok');
        if(fn) {
            fn();
        }
    }

}
