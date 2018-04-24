import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';

import {CloudTranslateModule, LayoutModule, SharedModule} from "inet-ui";
import {CustomLayoutModule} from "./pages/layout/custom-layout.module";
import {CustomTranslateLoader} from "./i18n/custom-translate-loader";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CloudTranslateModule.forRoot({
      loader: CustomTranslateLoader
    }),
    LayoutModule.forRoot({
      layoutModule: CustomLayoutModule
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
