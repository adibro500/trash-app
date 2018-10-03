"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_register_service_1 = require("~/player-register.service");
var ApplicationSettings = require("application-settings");
var ConfirmRegisterComponent = /** @class */ (function () {
    function ConfirmRegisterComponent(_dataService) {
        this._dataService = _dataService;
    }
    ConfirmRegisterComponent.prototype.ngOnInit = function () { };
    ConfirmRegisterComponent.prototype.submit = function () {
        if (this.password !== this.confirm_password) {
            this.isValid = false;
            return;
        }
        else {
            this.isValid = true;
        }
        var data = {
            "player_ref": ApplicationSettings.getNumber('player_id'),
            "email": this.email,
            "password": this.password
        };
        console.log(data);
        this._dataService.postCredsData(data)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ConfirmRegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-confirm-register',
            templateUrl: './confirm-register.component.html',
            styleUrls: ['./confirm-register.component.scss']
        }),
        __metadata("design:paramtypes", [player_register_service_1.PlayerRegisterService])
    ], ConfirmRegisterComponent);
    return ConfirmRegisterComponent;
}());
exports.ConfirmRegisterComponent = ConfirmRegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maXJtLXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBa0U7QUFDbEUsMERBQTREO0FBUTVEO0lBS0Usa0NBQW1CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUFJLENBQUM7SUFFM0QsMkNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCx5Q0FBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxJQUFJLElBQUksR0FBRztZQUNULFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3hELE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTFCVSx3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7U0FDakQsQ0FBQzt5Q0FNaUMsK0NBQXFCO09BTDNDLHdCQUF3QixDQTRCcEM7SUFBRCwrQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXJSZWdpc3RlclNlcnZpY2UgfSBmcm9tICd+L3BsYXllci1yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtLXJlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybVJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW1haWw7XG4gIHBhc3N3b3JkO1xuICBjb25maXJtX3Bhc3N3b3JkO1xuICBpc1ZhbGlkOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2RhdGFTZXJ2aWNlOiBQbGF5ZXJSZWdpc3RlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1fcGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIFwicGxheWVyX3JlZlwiOiBBcHBsaWNhdGlvblNldHRpbmdzLmdldE51bWJlcigncGxheWVyX2lkJyksXG4gICAgICBcImVtYWlsXCI6IHRoaXMuZW1haWwsXG4gICAgICBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmRcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgdGhpcy5fZGF0YVNlcnZpY2UucG9zdENyZWRzRGF0YShkYXRhKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9KVxuICB9XG5cbn1cbiJdfQ==