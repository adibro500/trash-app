"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var player_register_service_1 = require("~/player-register.service");
var router_1 = require("@angular/router");
var PlayerRegistrationAddressComponent = /** @class */ (function () {
    function PlayerRegistrationAddressComponent(_dataService, router) {
        this._dataService = _dataService;
        this.router = router;
    }
    PlayerRegistrationAddressComponent.prototype.ngOnInit = function () { };
    PlayerRegistrationAddressComponent.prototype.submit = function () {
        var _this = this;
        var data = {
            "player_ref": ApplicationSettings.getNumber('player_id'),
            "entity_type": "address",
            "company_name": this.company_name,
            "city": this.city,
            "state": this.state,
            "address_line": this.address_line,
            "address_line2": this.address_line_1,
            "postal_code": this.postal_code
        };
        console.log('dt', JSON.stringify(data));
        this._dataService.postAddRegisterData(data)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/registration']);
        });
    };
    PlayerRegistrationAddressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-player-registration-address',
            templateUrl: './player-registration-address.component.html',
            styleUrls: ['./player-registration-address.component.scss']
        }),
        __metadata("design:paramtypes", [player_register_service_1.PlayerRegisterService, router_1.Router])
    ], PlayerRegistrationAddressComponent);
    return PlayerRegistrationAddressComponent;
}());
exports.PlayerRegistrationAddressComponent = PlayerRegistrationAddressComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXJlZ2lzdHJhdGlvbi1hZGRyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXllci1yZWdpc3RyYXRpb24tYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTREO0FBQzVELHFFQUFrRTtBQUNsRSwwQ0FBeUM7QUFRekM7SUFPRSw0Q0FBbUIsWUFBbUMsRUFBUyxNQUFjO1FBQTFELGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRWxGLHFEQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsbURBQU0sR0FBTjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLElBQUksR0FBRztZQUNULFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3hELGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNqQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2hDLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7YUFDeEMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTVCVSxrQ0FBa0M7UUFOOUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUNBQWlDO1lBQzNDLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDNUQsQ0FBQzt5Q0FRaUMsK0NBQXFCLEVBQWlCLGVBQU07T0FQbEUsa0NBQWtDLENBOEI5QztJQUFELHlDQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksZ0ZBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBQbGF5ZXJSZWdpc3RlclNlcnZpY2UgfSBmcm9tICd+L3BsYXllci1yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wbGF5ZXItcmVnaXN0cmF0aW9uLWFkZHJlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGxheWVyLXJlZ2lzdHJhdGlvbi1hZGRyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGxheWVyLXJlZ2lzdHJhdGlvbi1hZGRyZXNzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyUmVnaXN0cmF0aW9uQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNpdHk7XG4gIHN0YXRlO1xuICBwb3N0YWxfY29kZTtcbiAgY29tcGFueV9uYW1lO1xuICBhZGRyZXNzX2xpbmU7XG4gIGFkZHJlc3NfbGluZV8xO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2RhdGFTZXJ2aWNlOiBQbGF5ZXJSZWdpc3RlclNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBcInBsYXllcl9yZWZcIjogQXBwbGljYXRpb25TZXR0aW5ncy5nZXROdW1iZXIoJ3BsYXllcl9pZCcpLFxuICAgICAgXCJlbnRpdHlfdHlwZVwiOiBcImFkZHJlc3NcIixcbiAgICAgIFwiY29tcGFueV9uYW1lXCI6IHRoaXMuY29tcGFueV9uYW1lLFxuICAgICAgXCJjaXR5XCI6IHRoaXMuY2l0eSxcbiAgICAgIFwic3RhdGVcIjogdGhpcy5zdGF0ZSxcbiAgICAgIFwiYWRkcmVzc19saW5lXCI6IHRoaXMuYWRkcmVzc19saW5lLFxuICAgICAgXCJhZGRyZXNzX2xpbmUyXCI6IHRoaXMuYWRkcmVzc19saW5lXzEsXG4gICAgICBcInBvc3RhbF9jb2RlXCI6IHRoaXMucG9zdGFsX2NvZGVcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2R0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3RBZGRSZWdpc3RlckRhdGEoZGF0YSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVnaXN0cmF0aW9uJ10pO1xuICAgICAgfSlcbiAgfVxuXG59XG4iXX0=