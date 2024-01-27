import {Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {GetWeatherDataService} from "../services/get-weather-data.service";
import {StoreJsonService} from "../services/store-json.service";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrl: './search-city.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule]
})
export class SearchCityComponent {
  cityName: string = '';
  hideBox: boolean = false

  constructor(private getWeatherDataService: GetWeatherDataService,
              private storeJsonService: StoreJsonService,
              public dialog: MatDialog) {
  }

  searchCity() {
    this.getData(this.cityName);
  }

  private getData(cityName: string) {
    this.getWeatherDataService.getWeather(cityName).subscribe(
      (data) => {
        this.hideBox = false;
        this.storeJsonService.setHideBox(this.hideBox);
        this.storeJsonService.setJsonData(data);
      },
      (error) => {
        this.hideBox = true;
        this.storeJsonService.setHideBox(this.hideBox);
        this.openErrorDialog(error)
      })
  }


  openErrorDialog(errorData: any) {
    this.dialog.open(ErrorDialogComponent, {
      data: {errorData},
      width: '600px'
    });
  }

  clearCity(){
    this.cityName = '';
    this.hideBox = true;
    this.storeJsonService.setHideBox(this.hideBox);
  }

}
