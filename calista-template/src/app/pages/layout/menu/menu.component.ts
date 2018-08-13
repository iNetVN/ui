import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CoreService, NotificationService} from 'inet-core';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs/Rx';

@Component({
    selector: 'app-common-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
    isCommunity = false;
    isMasterData = false;
    isRootModule = true;
    private _router: Subscription;
    private firstLoad = true;

    constructor(public coreService: CoreService,
                private notificationService: NotificationService,
                private router: Router,
                private location: Location) {

    }

    ngOnInit() {
        this.isCommunity = this.coreService.isCommunity();
        if (this.firstLoad) {
            this.renderMenuByUrl(this.router.url);
            this.firstLoad = false;
        }
        this._router = this.router.events.filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                this.renderMenuByUrl(event.url);
            });
    }

    private renderMenuByUrl(url: string) {
        this.isMasterData = url.indexOf('/master-data') === 0;
        this.isRootModule = !this.isMasterData;
    }

    ngOnDestroy(): void {
        this._router.unsubscribe();
    }

    back() {
        this.location.back();
    }
}
