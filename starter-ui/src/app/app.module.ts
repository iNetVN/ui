import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';

/* Components and Directives */
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
