"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_register_service_1 = require("~/player-register.service");
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var LoginComponent = /** @class */ (function () {
    // loginForm: FormGroup;
    function LoginComponent(_dataService, router) {
        this._dataService = _dataService;
        this.router = router;
        // this.loginForm = fb.group({
        //   emailControl: ['', Validators.required],
        //   passControl: ['', Validators.required],
        // })
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var data = {
            "email": this.email,
            "password": this.password
        };
        console.log(JSON.stringify(data));
        this._dataService.getCredsData(data)
            .subscribe(function (res) {
            if (res.length !== 0) {
                console.log('hjkl', res);
                ApplicationSettings.setNumber('player_id', res[0].player_ref);
                _this.router.navigate(['/tournament-list']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [player_register_service_1.PlayerRegisterService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUFrRTtBQUNsRSwwQ0FBeUM7QUFJekMsMERBQTREO0FBUTVEO0lBSUUsd0JBQXdCO0lBQ3hCLHdCQUFtQixZQUFtQyxFQUFTLE1BQWM7UUFBMUQsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzRSw4QkFBOEI7UUFDOUIsNkNBQTZDO1FBQzdDLDRDQUE0QztRQUM1QyxLQUFLO0lBQ1AsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkMsSUFBSSxJQUFJLEdBQUc7WUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtZQUM1QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOUJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBTWlDLCtDQUFxQixFQUFpQixlQUFNO09BTGxFLGNBQWMsQ0ErQjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXJSZWdpc3RlclNlcnZpY2UgfSBmcm9tICd+L3BsYXllci1yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBlbWFpbDtcbiAgcGFzc3dvcmQ7XG4gIC8vIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2RhdGFTZXJ2aWNlOiBQbGF5ZXJSZWdpc3RlclNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgIC8vIHRoaXMubG9naW5Gb3JtID0gZmIuZ3JvdXAoe1xuICAgIC8vICAgZW1haWxDb250cm9sOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIC8vICAgcGFzc0NvbnRyb2w6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgLy8gfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIFwiZW1haWxcIjogdGhpcy5lbWFpbCxcbiAgICAgIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0Q3JlZHNEYXRhKGRhdGEpXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2hqa2wnLCByZXMpO1xuICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0TnVtYmVyKCdwbGF5ZXJfaWQnLCByZXNbMF0ucGxheWVyX3JlZik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdG91cm5hbWVudC1saXN0J10pXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG4iXX0=