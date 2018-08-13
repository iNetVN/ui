import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';

/* App Root */
import {AppComponent} from './app.component';

import {
    CloudTranslateModule,
    MaterialLayoutModule,
    SharedModule,
} from 'inet-ui';
import {CustomTranslateLoader} from './i18n/custom-translate-loader';
import {CoreModule, CoreService, SecurityService} from 'inet-core';
import {environment} from '../environments/environment';
import {CustomMenuComponent} from "./pages/layout/menu/custom-menu.component";

@NgModule({
    declarations: [
        AppComponent,
        CustomMenuComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        CloudTranslateModule.forRoot({
            loader: CustomTranslateLoader
        }),
        MaterialLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private securityService: SecurityService,
                private coreService: CoreService) {

        this.coreService.setEnvironment(environment);

        console.log('[LayoutModule][environment]', this.coreService.getEnvironment());

        if (this.coreService.getEnvironment().production) {
            setInterval(this.securityService.ping.bind(this), 2 * 60000);
        }
    }
}
