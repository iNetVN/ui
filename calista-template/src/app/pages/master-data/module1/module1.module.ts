import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Module1RoutingModule} from './module1-routing.module';
import {Module1ListComponent} from './module1-list/module1-list.component';
import {Module1AddComponent} from './module1-add/module1-add.component';
import {AppCommonModule} from "../../common/app-common.module";
import {DialogModule, GridModule} from "inet-ui";
import {DataService} from "../../../data/data.service";

@NgModule({
    imports: [
        CommonModule,
        Module1RoutingModule,
        AppCommonModule,
        GridModule,
        DialogModule
    ],
    declarations: [Module1ListComponent, Module1AddComponent],
    providers: [DataService]
})
export class Module1Module {
}
