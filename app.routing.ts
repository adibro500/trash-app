import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "~/login/login.component";
import { RegistrationComponent } from "~/registration/registration.component";
import { PlayerRegistrationComponent } from "~/player-registration/player-registration.component";
import { PlayerRegistrationAddressComponent } from "~/player-registration-address/player-registration-address.component";
import { MapComponent } from "~/map/map.component";
import { CardsComponent } from "~/cards/cards.component";
import { WeatherMainComponent } from "~/weather-main/weather-main.component";
import { ConfirmRegisterComponent } from "~/confirm-register/confirm-register.component";

const routes: Routes = [
    { path: "", component: LoginComponent },//component: PlayerRegistrationComponent },// redirectTo: "/items", pathMatch: "full" },
    { path: "player-register", component: PlayerRegistrationComponent },
    { path: "player-register-address", component: PlayerRegistrationAddressComponent },
    { path: "registration", component: ConfirmRegisterComponent },
    // { path: 'map', component: MapComponent },
    { path: 'tournament-list', component: ItemsComponent },
    // { path: 'cards', component: CardsComponent },
    { path: "item/:tournament_ref", component: ItemDetailComponent }
    // { path: "weather", component: WeatherMainComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }