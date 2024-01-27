import {Component, OnInit} from '@angular/core';
import {StoreJsonService} from "../services/store-json.service";

@Component({
  selector: 'app-details-box',
  templateUrl: './details-box.component.html',
  styleUrl: './details-box.component.scss'
})
export class DetailsBoxComponent implements OnInit {

  jsonData: any;
  cityName: string = '';
  currentTemp?: number;
  feelLike?: number;

  hideBox: boolean = false;

  constructor(private storeJsonService: StoreJsonService) {
  }

  ngOnInit() {
    this.storeJsonService.jsonData$.subscribe((data) => {
      this.jsonData = data;
      this.cityName = this.jsonData?.name;
      this.currentTemp = Math.floor(Number(this.jsonData?.main?.temp))
      this.feelLike = Math.floor(Number(this.jsonData?.main?.feels_like))
    })

    this.storeJsonService.hideBox$.subscribe((hideBox)=>{
      this.hideBox = hideBox
    })

    this.getWeatherCondition()
  }

  // this function return css icon depends on weather condition
  getWeatherCondition(): any {

    if (this.jsonData && this.jsonData.weather && this.jsonData.weather.length > 0) {
      const weatherMain = this.jsonData.weather[0].main;
      switch (weatherMain) {
        case "Haze":
          return "fa-solid fa-cloud"
        case "Clouds":
          return "fa-solid fa-cloud"
        case "Rain":
          return "fa-solid fa-cloud-rain"
        case "Snow":
          return "fa-solid fa-snowflake"
        case "Clear":
          return "fa-solid fa-sun"
        case "Thunderstorm":
          return "fa-solid fa-bolt"
        case "Mist":
          return "fa-solid fa-cloud"
        default:
          return "";
      }
    }
  }

}
