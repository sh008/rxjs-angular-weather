import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {SearchCityComponent} from "./search-city/search-city.component";
import { DetailsBoxComponent } from './details-box/details-box.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsBoxComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchCityComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
