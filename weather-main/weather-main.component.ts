import { Component, OnInit } from '@angular/core';
import { WeatherService } from '~/weather.service';

@Component({
  moduleId: module.id,
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {

  weather: any;
  constructor(public _weather: WeatherService) { }

  ngOnInit() {
    this.weather = this._weather.getWeatherData().subscribe(
      res => {
        this.weather = res;
        alert(this.weather.result.uv);
      }
    )
  }

}
