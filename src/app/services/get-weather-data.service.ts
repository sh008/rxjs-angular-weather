import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetWeatherDataService {

  private apiKey: string = '55f428ad7a8370ee4852c41ecd5c1edb';
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) {
  }


  getWeather(city: string): Observable<any> {
    const url: string = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }

}
