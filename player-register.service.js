"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var PlayerRegisterService = /** @class */ (function () {
    function PlayerRegisterService(http) {
        this.http = http;
    }
    PlayerRegisterService.prototype.getCountries = function () {
        var reqs = new http_2.RequestOptions();
        var headers = new http_2.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.get('http://10.0.2.2:8000/countries/', reqs)
            .map(function (res) {
            return res.json();
        });
    };
    PlayerRegisterService.prototype.postRegisterData = function (postJson) {
        var reqs = new http_2.RequestOptions();
        var headers = new http_2.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.post('http://10.0.2.2:8000/players/', postJson, reqs)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    PlayerRegisterService.prototype.postAddRegisterData = function (postJson) {
        var reqs = new http_2.RequestOptions();
        var headers = new http_2.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.post('http://10.0.2.2:8000/addresses/', postJson, reqs)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    PlayerRegisterService.prototype.postCredsData = function (postJson) {
        var reqs = new http_2.RequestOptions();
        var headers = new http_2.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.post('http://10.0.2.2:8000/player-credentials/', postJson, reqs)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    PlayerRegisterService.prototype.getCredsData = function (postJson) {
        var reqs = new http_2.RequestOptions();
        var headers = new http_2.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.get('http://10.0.2.2:8000/player_list/?email=' + postJson.email + '&password=' + postJson.password, reqs)
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    PlayerRegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PlayerRegisterService);
    return PlayerRegisterService;
}());
exports.PlayerRegisterService = PlayerRegisterService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXJlZ2lzdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXItcmVnaXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsc0NBQXdEO0FBR3hEO0lBRUUsK0JBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRzdCLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUM7YUFDMUQsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLFFBQVE7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2FBQ25FLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR0QsbURBQW1CLEdBQW5CLFVBQW9CLFFBQVE7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2FBQ3JFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLFFBQVE7UUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywwQ0FBMEMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2FBQzlFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsNENBQVksR0FBWixVQUFhLFFBQVE7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzthQUN2SCxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWhFVSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FHYyxXQUFJO09BRmxCLHFCQUFxQixDQWtFakM7SUFBRCw0QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbGF5ZXJSZWdpc3RlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cblxuICB9XG5cbiAgZ2V0Q291bnRyaWVzKCkge1xuICAgIGxldCByZXFzID0gbmV3IFJlcXVlc3RPcHRpb25zKCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJlcXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xMC4wLjIuMjo4MDAwL2NvdW50cmllcy8nLCByZXFzKVxuICAgICAgLm1hcChyZXMgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgfVxuXG4gIHBvc3RSZWdpc3RlckRhdGEocG9zdEpzb24pIHtcbiAgICBsZXQgcmVxcyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXFzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovLzEwLjAuMi4yOjgwMDAvcGxheWVycy8nLCBwb3N0SnNvbiwgcmVxcylcbiAgICAgIC5tYXAocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICB9XG5cblxuICBwb3N0QWRkUmVnaXN0ZXJEYXRhKHBvc3RKc29uKSB7XG4gICAgbGV0IHJlcXMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgcmVxcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly8xMC4wLjIuMjo4MDAwL2FkZHJlc3Nlcy8nLCBwb3N0SnNvbiwgcmVxcylcbiAgICAgIC5tYXAocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICB9KVxuICB9XG5cbiAgcG9zdENyZWRzRGF0YShwb3N0SnNvbikge1xuICAgIGxldCByZXFzID0gbmV3IFJlcXVlc3RPcHRpb25zKCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJlcXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vMTAuMC4yLjI6ODAwMC9wbGF5ZXItY3JlZGVudGlhbHMvJywgcG9zdEpzb24sIHJlcXMpXG4gICAgICAubWFwKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgfVxuICBnZXRDcmVkc0RhdGEocG9zdEpzb24pIHtcbiAgICBsZXQgcmVxcyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXFzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vMTAuMC4yLjI6ODAwMC9wbGF5ZXJfbGlzdC8/ZW1haWw9JyArIHBvc3RKc29uLmVtYWlsICsgJyZwYXNzd29yZD0nICsgcG9zdEpzb24ucGFzc3dvcmQsIHJlcXMpXG4gICAgICAubWFwKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgfSlcbiAgfVxuXG59XG4iXX0=