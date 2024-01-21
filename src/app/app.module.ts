import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {SearchCityComponent} from "./search-city/search-city.component";
import { DetailsBoxComponent } from './details-box/details-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchCityComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
