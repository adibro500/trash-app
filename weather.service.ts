import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {

  constructor(public _http: Http) { }

  getWeatherData() {
    var Options = new RequestOptions();
    var headers = new Headers();
    headers.append('x-access-token', 'e628b201ce775c7603382d0cf9b6d567');
    Options.headers = headers;
    // const link = this.utilsService.linkGeneration(environment.auth, environment.hirest.getAssessorProfile) + '/' + userCode;
    return this._http.get('https://api.openuv.io/api/v1/uv?lat=21.18&lng=72.74', Options)
      .map(response => {
        return response.json();
      });


  }

}
