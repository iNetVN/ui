import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
    selector: 'app-module2-add',
    templateUrl: './module2-add.component.html',
    styleUrls: ['./module2-add.component.scss']
})
export class Module2AddComponent implements OnInit {

    constructor(private location: Location) {
    }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }
}
