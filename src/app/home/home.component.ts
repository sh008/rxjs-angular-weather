import {Component, OnInit} from '@angular/core';
import {GetWeatherDataService} from "../services/get-weather-data.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{}
