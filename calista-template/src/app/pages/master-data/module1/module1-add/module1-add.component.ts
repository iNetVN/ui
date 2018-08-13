import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
    selector: 'app-module1-add',
    templateUrl: './module1-add.component.html',
    styleUrls: ['./module1-add.component.scss']
})
export class Module1AddComponent implements OnInit {

    constructor(private location: Location) {
    }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }
}
