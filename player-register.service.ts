import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PlayerRegisterService {

  constructor(public http: Http) {


  }

  getCountries() {
    let reqs = new RequestOptions();
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    reqs.headers = headers;
    return this.http.get('http://10.0.2.2:8000/countries/', reqs)
      .map(res => {
        return res.json()
      })
  }

  postRegisterData(postJson) {
    let reqs = new RequestOptions();
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    reqs.headers = headers;
    return this.http.post('http://10.0.2.2:8000/players/', postJson, reqs)
      .map(res => {
        console.log(res.json());
        return res.json()
      })
  }


  postAddRegisterData(postJson) {
    let reqs = new RequestOptions();
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    reqs.headers = headers;
    return this.http.post('http://10.0.2.2:8000/addresses/', postJson, reqs)
      .map(res => {
        console.log(res.json());
        return res.json()
      })
  }

  postCredsData(postJson) {
    let reqs = new RequestOptions();
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    reqs.headers = headers;
    return this.http.post('http://10.0.2.2:8000/player-credentials/', postJson, reqs)
      .map(res => {
        console.log(res.json());
        return res.json()
      })
  }
  getCredsData(postJson) {
    let reqs = new RequestOptions();
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    reqs.headers = headers;
    return this.http.get('http://10.0.2.2:8000/player_list/?email=' + postJson.email + '&password=' + postJson.password, reqs)
      .map(res => {
        console.log(res.json());
        return res.json()
      })
  }

}
