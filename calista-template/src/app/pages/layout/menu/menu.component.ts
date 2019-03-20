import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'app-common-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    private _router: Subscription;
    constructor(private router: Router,
                private location: Location,
    ) {

    }

    ngOnInit() {
        this._router = this.router.events.filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {

            });
    }

    ngOnDestroy(): void {
        this._router.unsubscribe();
    }

    back() {
        this.location.back();
    }
}
