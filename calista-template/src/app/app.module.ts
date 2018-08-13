import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

/* App Root */
import {AppComponent} from './app.component';

import {CoreService, SecurityService} from 'inet-core';
import {environment} from '../environments/environment';
import {
    BootstrapLayoutModule,
    SocketService,
    WebsocketModule
} from 'inet-ui';
import {MenuComponent} from './pages/layout/menu/menu.component';
import {AppCommonModule} from "./pages/common/app-common.module";

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppCommonModule,
        BootstrapLayoutModule,
        WebsocketModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private socketService: SocketService,
                private securityService: SecurityService,
                private coreService: CoreService) {

        this.coreService.setEnvironment(environment);

        this.socketService.connect();
        if (this.coreService.getEnvironment().production) {
            setInterval(this.securityService.ping.bind(this), 2 * 60000);
        }
    }
}
