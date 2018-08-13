import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-module2-list',
    templateUrl: './module2-list.component.html',
    styleUrls: ['./module2-list.component.scss']
})
export class Module2ListComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onAdd() {
    }

}
