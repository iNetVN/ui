import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {AppCommonModule} from "../common/app-common.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        AppCommonModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
