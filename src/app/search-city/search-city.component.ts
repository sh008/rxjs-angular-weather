import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {GetWeatherDataService} from "../services/get-weather-data.service";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrl: './search-city.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule]
})
export class SearchCityComponent {
  cityName: string = '';

  constructor(private getWeatherDataService: GetWeatherDataService) {
  }

  searchCity() {
    this.getData(this.cityName);
  }
  private getData(cityName: string) {
    this.getWeatherDataService.getWeather(cityName).subscribe(data => {
      console.log(data)
    })
  }

}
