import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { PlayerRegisterService } from '~/player-register.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ListPicker } from "ui/list-picker";
import { Router } from '@angular/router';
import * as ApplicationSettings from "application-settings";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
  moduleId: module.id,
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.scss']
})
export class PlayerRegistrationComponent implements OnInit, AfterViewInit {
  data;
  countries: any[] = [];
  countryList: Array<string>;
  public picked;
  public first_name;
  public last_name;
  public gender;
  public pickedIndex: number;
  user_data: any = {};

  public selectedIndex = 1;
  public items: Array<string>;



  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    console.log('gender', this.items[args.newIndex]);
    this.gender = this.items[args.newIndex];
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }



  constructor(public http: Http, public playerReg: PlayerRegisterService, public router: Router) {
    this.items = [];
    this.items.push('M');
    this.items.push('F');
    this.items.push('N');
  }
  ngOnInit() {

    // let obj = {};
    // this.buildCountries();

    // this.ngOnInit();

  }

  ngAfterViewInit() {
    // for (var i = 0; i < this.countries.length; i++) {
    //   if (this.countries[i] !== undefined) {
    //     this.countryList.push(this.countries[i]['country_name']);
    //   }
    // }
    this.countryList = [];
    this.playerReg.getCountries()
      .subscribe((response: any[]) => {

        this.countries = response;
        // console.log(this.countries);
        // if (this.countries !== undefined) {
        //   for (var i = 0; i < this.countries.length; i++) {
        //     this.countryList.push(this.countries[i].country_name);
        //   }
        this.countryList = this.countries.map(obj => {
          return obj.country_name;
        })
        console.log('hj', this.countries);
        console.log('hj', this.countryList);
      }
      );
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    console.log("picker selection: " + picker.selectedIndex);

    this.picked = picker.selectedIndex;
    this.pickedIndex = ++this.picked;
    // this.user_data['country'] = ++picker.selectedIndex;
  }

  submitPlayer() {
    this.user_data = {
      "first_name": this.first_name,
      "last_name": this.last_name,
      "gender": this.gender,
      "country": this.pickedIndex
    }

    // this.data['country'] = this.pickedIndex;
    console.log('afro', JSON.stringify(this.user_data));
    this.playerReg.postRegisterData(this.user_data)
      .subscribe(
      res => {
        console.log(res);
        ApplicationSettings.setNumber('player_id', res.player_ref);
        this.router.navigate(['/player-register-address']);
      }
      )

  }

}
