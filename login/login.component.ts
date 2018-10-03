import { Component, OnInit } from '@angular/core';
import { PlayerRegisterService } from '~/player-register.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import * as ApplicationSettings from "application-settings";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;
  // loginForm: FormGroup;
  constructor(public _dataService: PlayerRegisterService, public router: Router) {
    // this.loginForm = fb.group({
    //   emailControl: ['', Validators.required],
    //   passControl: ['', Validators.required],
    // })
  }

  ngOnInit() {

  }

  login() {
    let data = {
      "email": this.email,
      "password": this.password
    }
    console.log(JSON.stringify(data));
    this._dataService.getCredsData(data)
      .subscribe(res => {
        if (res.length !== 0) {
          console.log('hjkl', res);
          ApplicationSettings.setNumber('player_id', res[0].player_ref);
          this.router.navigate(['/tournament-list'])
        }
      });
  }
}
