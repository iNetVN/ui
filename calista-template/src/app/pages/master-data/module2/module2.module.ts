import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Module2RoutingModule} from './module2-routing.module';
import {Module2ListComponent} from './module2-list/module2-list.component';
import {Module2AddComponent} from './module2-add/module2-add.component';
import {AppCommonModule} from "../../common/app-common.module";
import {GridModule} from "inet-ui";
import {Module2Service} from "./module2.service";

@NgModule({
    imports: [
        CommonModule,
        Module2RoutingModule,
        AppCommonModule,
        GridModule
    ],
    declarations: [Module2ListComponent, Module2AddComponent],
    providers: [Module2Service]
})
export class Module2Module {
}
