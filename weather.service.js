"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var http_3 = require("@angular/http");
require("rxjs/add/operator/map");
var WeatherService = /** @class */ (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getWeatherData = function () {
        var Options = new http_2.RequestOptions();
        var headers = new http_3.Headers();
        headers.append('x-access-token', 'e628b201ce775c7603382d0cf9b6d567');
        Options.headers = headers;
        // const link = this.utilsService.linkGeneration(environment.auth, environment.hirest.getAssessorProfile) + '/' + userCode;
        return this._http.get('https://api.openuv.io/api/v1/uv?lat=21.18&lng=72.74', Options)
            .map(function (response) {
            return response.json();
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxzQ0FBK0M7QUFDL0Msc0NBQXdDO0FBRXhDLGlDQUE4QjtBQUc5QjtJQUVFLHdCQUFtQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFJLENBQUM7SUFFbkMsdUNBQWMsR0FBZDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzFCLDJIQUEySDtRQUMzSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMscURBQXFELEVBQUUsT0FBTyxDQUFDO2FBQ2xGLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQWhCVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2UsV0FBSTtPQUZuQixjQUFjLENBa0IxQjtJQUFELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9odHRwOiBIdHRwKSB7IH1cblxuICBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgICB2YXIgT3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLCAnZTYyOGIyMDFjZTc3NWM3NjAzMzgyZDBjZjliNmQ1NjcnKTtcbiAgICBPcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIC8vIGNvbnN0IGxpbmsgPSB0aGlzLnV0aWxzU2VydmljZS5saW5rR2VuZXJhdGlvbihlbnZpcm9ubWVudC5hdXRoLCBlbnZpcm9ubWVudC5oaXJlc3QuZ2V0QXNzZXNzb3JQcm9maWxlKSArICcvJyArIHVzZXJDb2RlO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cHM6Ly9hcGkub3BlbnV2LmlvL2FwaS92MS91dj9sYXQ9MjEuMTgmbG5nPTcyLjc0JywgT3B0aW9ucylcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSk7XG5cblxuICB9XG5cbn1cbiJdfQ==