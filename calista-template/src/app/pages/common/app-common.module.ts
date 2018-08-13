import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ComponentLoaderFactory, ModalModule, PositioningService} from 'ngx-bootstrap';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';
import {CoreModule} from "inet-core";
import {AuthenticateGuard, CloudTranslateModule, InterceptorModule} from 'inet-ui';
import {CustomTranslateLoader} from '../../i18n/custom-translate-loader';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CloudTranslateModule.forRoot({
            loader: CustomTranslateLoader
        }),
        ModalModule.forRoot()
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CoreModule,
        CloudTranslateModule,
        ModalModule,
        InterceptorModule
    ],
    providers: [
        ComponentLoaderFactory,
        AuthenticateGuard,
        PositioningService,
        BsLocaleService
    ]
})
export class AppCommonModule {
}
