"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("~/weather.service");
var WeatherMainComponent = /** @class */ (function () {
    function WeatherMainComponent(_weather) {
        this._weather = _weather;
    }
    WeatherMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weather = this._weather.getWeatherData().subscribe(function (res) {
            _this.weather = res;
            alert(_this.weather.result.uv);
        });
    };
    WeatherMainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-weather-main',
            templateUrl: './weather-main.component.html',
            styleUrls: ['./weather-main.component.scss']
        }),
        __metadata("design:paramtypes", [weather_service_1.WeatherService])
    ], WeatherMainComponent);
    return WeatherMainComponent;
}());
exports.WeatherMainComponent = WeatherMainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYXRoZXItbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscURBQW1EO0FBUW5EO0lBR0UsOEJBQW1CLFFBQXdCO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO0lBQUksQ0FBQztJQUVoRCx1Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUNyRCxVQUFBLEdBQUc7WUFDRCxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBWlUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBSTZCLGdDQUFjO09BSGhDLG9CQUFvQixDQWNoQztJQUFELDJCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnfi93ZWF0aGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtd2VhdGhlci1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dlYXRoZXItbWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dlYXRoZXItbWFpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB3ZWF0aGVyOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfd2VhdGhlcjogV2VhdGhlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud2VhdGhlciA9IHRoaXMuX3dlYXRoZXIuZ2V0V2VhdGhlckRhdGEoKS5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICB0aGlzLndlYXRoZXIgPSByZXM7XG4gICAgICAgIGFsZXJ0KHRoaXMud2VhdGhlci5yZXN1bHQudXYpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG59XG4iXX0=