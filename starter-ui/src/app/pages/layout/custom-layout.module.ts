import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {LayoutComponent, NavbarComponent, NotificationComponent, SharedModule, SidenavComponent} from "inet-ui";
import {CustomMenuComponent} from "./menu/custom-menu.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent, SidenavComponent,
    CustomMenuComponent, NotificationComponent
  ],
  exports: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class CustomLayoutModule {
}
