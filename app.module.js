"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var login_component_1 = require("~/login/login.component");
var registration_component_1 = require("~/registration/registration.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var player_registration_component_1 = require("~/player-registration/player-registration.component");
var player_registration_address_component_1 = require("~/player-registration-address/player-registration-address.component");
var map_component_1 = require("~/map/map.component");
var cards_component_1 = require("~/cards/cards.component");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var weather_service_1 = require("~/weather.service");
var weather_main_component_1 = require("~/weather-main/weather-main.component");
var http_1 = require("@angular/http");
var http_2 = require("nativescript-angular/http");
var player_register_service_1 = require("~/player-register.service");
var angular_2 = require("nativescript-radiobutton/angular");
var forms_1 = require("nativescript-angular/forms");
var confirm_register_component_1 = require("~/confirm-register/confirm-register.component");
var forms_2 = require("@angular/forms");
var forms_3 = require("@angular/forms");
var angular_3 = require("nativescript-drop-down/angular");
nativescript_ngx_fonticon_1.TNSFontIconService.debug = true;
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                angular_3.DropDownModule,
                forms_1.NativeScriptFormsModule,
                forms_3.FormsModule,
                nativescript_module_1.NativeScriptModule,
                http_2.NativeScriptHttpModule,
                forms_2.ReactiveFormsModule,
                app_routing_1.AppRoutingModule,
                http_1.HttpModule,
                angular_2.RadioButtonModule,
                angular_1.NativeScriptUISideDrawerModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './css/font-awesome.min.css',
                }),
            ],
            declarations: [
                app_component_1.AppComponent,
                map_component_1.MapComponent,
                confirm_register_component_1.ConfirmRegisterComponent,
                weather_main_component_1.WeatherMainComponent,
                cards_component_1.CardsComponent,
                player_registration_address_component_1.PlayerRegistrationAddressComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                registration_component_1.RegistrationComponent,
                login_component_1.LoginComponent,
                player_registration_component_1.PlayerRegistrationComponent
            ],
            providers: [
                item_service_1.ItemService, weather_service_1.WeatherService, player_register_service_1.PlayerRegisterService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsMkRBQXlEO0FBQ3pELGdGQUE4RTtBQUM5RSx1RUFBa0Y7QUFDbEYscUdBQWtHO0FBQ2xHLDZIQUF5SDtBQUN6SCxxREFBbUQ7QUFDbkQsMkRBQXlEO0FBQ3pELDhEQUFvRjtBQUNwRixxREFBbUQ7QUFDbkQsZ0ZBQTZFO0FBQzdFLHNDQUEyQztBQUMzQyxrREFBbUU7QUFDbkUscUVBQWtFO0FBQ2xFLDREQUFvRTtBQUNwRSxvREFBcUU7QUFDckUsNEZBQXlGO0FBQ3pGLHdDQUFxRDtBQUNyRCx3Q0FBNkM7QUFDN0MsMERBQWdFO0FBR2hFLDhDQUFrQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFFaEMsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBNEN0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUExQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdCQUFjO2dCQUNkLCtCQUF1QjtnQkFDdkIsbUJBQVc7Z0JBQ1gsd0NBQWtCO2dCQUNsQiw2QkFBc0I7Z0JBQ3RCLDJCQUFtQjtnQkFDbkIsOEJBQWdCO2dCQUNoQixpQkFBVTtnQkFDViwyQkFBaUI7Z0JBQ2pCLHdDQUE4QjtnQkFDOUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUN0QixJQUFJLEVBQUUsNEJBQTRCO2lCQUNyQyxDQUFDO2FBQ0w7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osNEJBQVk7Z0JBQ1oscURBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLGdDQUFjO2dCQUNkLDBFQUFrQztnQkFDbEMsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQiw4Q0FBcUI7Z0JBQ3JCLGdDQUFjO2dCQUNkLDJEQUEyQjthQUM5QjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVyxFQUFFLGdDQUFjLEVBQUUsK0NBQXFCO2FBQ3JEO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCJ+L2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIn4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlLCBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcbmltcG9ydCB7IFBsYXllclJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCJ+L3BsYXllci1yZWdpc3RyYXRpb24vcGxheWVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYXllclJlZ2lzdHJhdGlvbkFkZHJlc3NDb21wb25lbnQgfSBmcm9tIFwifi9wbGF5ZXItcmVnaXN0cmF0aW9uLWFkZHJlc3MvcGxheWVyLXJlZ2lzdHJhdGlvbi1hZGRyZXNzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIn4vbWFwL21hcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRzQ29tcG9uZW50IH0gZnJvbSBcIn4vY2FyZHMvY2FyZHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tIFwifi93ZWF0aGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFdlYXRoZXJNYWluQ29tcG9uZW50IH0gZnJvbSBcIn4vd2VhdGhlci1tYWluL3dlYXRoZXItbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUGxheWVyUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSBcIn4vcGxheWVyLXJlZ2lzdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZGlvQnV0dG9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXJhZGlvYnV0dG9uL2FuZ3VsYXInXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQ29uZmlybVJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIn4vY29uZmlybS1yZWdpc3Rlci9jb25maXJtLXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuXG5cblROU0ZvbnRJY29uU2VydmljZS5kZWJ1ZyA9IHRydWU7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgRHJvcERvd25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBSYWRpb0J1dHRvbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgICdmYSc6ICcuL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWFwQ29tcG9uZW50LFxuICAgICAgICBDb25maXJtUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIFdlYXRoZXJNYWluQ29tcG9uZW50LFxuICAgICAgICBDYXJkc0NvbXBvbmVudCxcbiAgICAgICAgUGxheWVyUmVnaXN0cmF0aW9uQWRkcmVzc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFBsYXllclJlZ2lzdHJhdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLCBXZWF0aGVyU2VydmljZSwgUGxheWVyUmVnaXN0ZXJTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19