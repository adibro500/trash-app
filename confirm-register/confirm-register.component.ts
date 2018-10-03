import { Component, OnInit } from '@angular/core';
import { PlayerRegisterService } from '~/player-register.service';
import * as ApplicationSettings from "application-settings";

@Component({
  moduleId: module.id,
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.scss']
})
export class ConfirmRegisterComponent implements OnInit {
  email;
  password;
  confirm_password;
  isValid: boolean;
  constructor(public _dataService: PlayerRegisterService) { }

  ngOnInit() { }

  submit() {
    if (this.password !== this.confirm_password) {
      this.isValid = false;
      return;
    } else {
      this.isValid = true;
    }
    let data = {
      "player_ref": ApplicationSettings.getNumber('player_id'),
      "email": this.email,
      "password": this.password
    }
    console.log(data);
    this._dataService.postCredsData(data)
      .subscribe(res => {
        console.log(res)
      })
  }

}
