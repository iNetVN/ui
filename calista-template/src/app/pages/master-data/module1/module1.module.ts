import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Module1RoutingModule} from './module1-routing.module';
import {Module1ListComponent} from './module1-list/module1-list.component';
import {Module1AddComponent} from './module1-add/module1-add.component';
import {AppCommonModule} from "../../common/app-common.module";
import {GridModule} from "inet-ui";
import {Module1Service} from "./module1.service";

@NgModule({
    imports: [
        CommonModule,
        Module1RoutingModule,
        AppCommonModule,
        GridModule
    ],
    declarations: [Module1ListComponent, Module1AddComponent],
    providers: [Module1Service]
})
export class Module1Module {
}
