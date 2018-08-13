import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-module1-list',
    templateUrl: './module1-list.component.html',
    styleUrls: ['./module1-list.component.scss']
})
export class Module1ListComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onAdd() {
    }

}
