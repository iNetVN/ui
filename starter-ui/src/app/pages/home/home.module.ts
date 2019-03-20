import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {HomeDirective} from './home.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule
    ],
    declarations: [
        HomeComponent,
        HomeDirective
    ]
})

export class HomeModule {
}
