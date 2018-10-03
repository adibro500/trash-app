import { Component, OnInit } from '@angular/core';
import * as ApplicationSettings from "application-settings";
import { PlayerRegisterService } from '~/player-register.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-player-registration-address',
  templateUrl: './player-registration-address.component.html',
  styleUrls: ['./player-registration-address.component.scss']
})
export class PlayerRegistrationAddressComponent implements OnInit {
  city;
  state;
  postal_code;
  company_name;
  address_line;
  address_line_1;
  constructor(public _dataService: PlayerRegisterService, public router: Router) { }

  ngOnInit() { }

  submit() {
    let data = {
      "player_ref": ApplicationSettings.getNumber('player_id'),
      "entity_type": "address",
      "company_name": this.company_name,
      "city": this.city,
      "state": this.state,
      "address_line": this.address_line,
      "address_line2": this.address_line_1,
      "postal_code": this.postal_code
    }
    console.log('dt', JSON.stringify(data));
    this._dataService.postAddRegisterData(data)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/registration']);
      })
  }

}
