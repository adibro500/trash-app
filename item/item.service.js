"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ItemService = /** @class */ (function () {
    // private items = new Array<Item>(
    //     { id: 1, name: "Adibro500", role: "Goalkeeper" },
    //     { id: 3, name: "Piqué", role: "Defender" },
    //     { id: 4, name: "I. Rakitic", role: "Midfielder" },
    //     { id: 5, name: "Sergio", role: "Midfielder" },
    //     { id: 6, name: "Denis Suárez", role: "Midfielder" },
    //     { id: 7, name: "Arda", role: "Midfielder" },
    //     { id: 8, name: "A. Iniesta", role: "Midfielder" },
    //     { id: 9, name: "Suárez", role: "Forward" },
    //     { id: 10, name: "Messi", role: "Forward" },
    //     { id: 11, name: "Neymar", role: "Forward" },
    //     { id: 12, name: "Rafinha", role: "Midfielder" },
    //     { id: 13, name: "Cillessen", role: "Goalkeeper" },
    //     { id: 14, name: "Mascherano", role: "Defender" },
    //     { id: 17, name: "Paco Alcácer", role: "Forward" },
    //     { id: 18, name: "Jordi Alba", role: "Defender" },
    //     { id: 19, name: "Digne", role: "Defender" },
    //     { id: 20, name: "Sergi Roberto", role: "Midfielder" },
    //     { id: 21, name: "André Gomes", role: "Midfielder" },
    //     { id: 22, name: "Aleix Vidal", role: "Midfielder" },
    //     { id: 23, name: "Umtiti", role: "Defender" },
    //     { id: 24, name: "Mathieu", role: "Defender" },
    //     { id: 25, name: "Masip", role: "Goalkeeper" },
    // );
    function ItemService(http) {
        this.http = http;
        this.items = new Array();
    }
    ItemService.prototype.getItemsData = function () {
        var reqs = new http_1.RequestOptions();
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        var that = this;
        return this.http.get('http://10.0.2.2:8000/tournaments')
            .map(function (res) {
            console.log(res.json());
            that.items = res.json();
            return res.json();
        });
    };
    ItemService.prototype.playerParticipate = function (postJson) {
        var reqs = new http_1.RequestOptions();
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.post('http://localhost:8000/player-tournaments/', postJson, reqs)
            .map(function (res) {
            return res.json();
        });
    };
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (tournament_ref) {
        var reqs = new http_1.RequestOptions();
        var headers = new http_1.Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        var that = this;
        return this.http.get('http://10.0.2.2:8000/tournaments/' + tournament_ref)
            .map(function (res) {
            console.log(res.json());
            that.items = res.json();
            return res.json();
        });
    };
    ItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLHNDQUE4RDtBQUc5RDtJQUVJLG1DQUFtQztJQUNuQyx3REFBd0Q7SUFDeEQsa0RBQWtEO0lBQ2xELHlEQUF5RDtJQUN6RCxxREFBcUQ7SUFDckQsMkRBQTJEO0lBQzNELG1EQUFtRDtJQUNuRCx5REFBeUQ7SUFDekQsa0RBQWtEO0lBQ2xELGtEQUFrRDtJQUNsRCxtREFBbUQ7SUFDbkQsdURBQXVEO0lBQ3ZELHlEQUF5RDtJQUN6RCx3REFBd0Q7SUFDeEQseURBQXlEO0lBQ3pELHdEQUF3RDtJQUN4RCxtREFBbUQ7SUFDbkQsNkRBQTZEO0lBQzdELDJEQUEyRDtJQUMzRCwyREFBMkQ7SUFDM0Qsb0RBQW9EO0lBQ3BELHFEQUFxRDtJQUNyRCxxREFBcUQ7SUFDckQsS0FBSztJQUVMLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQTFCdEIsVUFBSyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7SUEwQkEsQ0FBQztJQUNuQyxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUdWLENBQUM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsUUFBUTtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLHFCQUFjLEVBQUUsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUM7YUFDN0UsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsY0FBc0I7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxxQkFBYyxFQUFFLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsY0FBYyxDQUFDO2FBQ3JFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBdkVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0E0QmlCLFdBQUk7T0EzQnJCLFdBQVcsQ0F3RXZCO0lBQUQsa0JBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oKTtcbiAgICAvLyBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KFxuICAgIC8vICAgICB7IGlkOiAxLCBuYW1lOiBcIkFkaWJybzUwMFwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAzLCBuYW1lOiBcIlBpcXXDqVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogNCwgbmFtZTogXCJJLiBSYWtpdGljXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDUsIG5hbWU6IFwiU2VyZ2lvXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDYsIG5hbWU6IFwiRGVuaXMgU3XDoXJlelwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiA3LCBuYW1lOiBcIkFyZGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogOCwgbmFtZTogXCJBLiBJbmllc3RhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgLy8gICAgIHsgaWQ6IDksIG5hbWU6IFwiU3XDoXJlelwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxMCwgbmFtZTogXCJNZXNzaVwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxMSwgbmFtZTogXCJOZXltYXJcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMTIsIG5hbWU6IFwiUmFmaW5oYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxMywgbmFtZTogXCJDaWxsZXNzZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMTQsIG5hbWU6IFwiTWFzY2hlcmFub1wiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMTcsIG5hbWU6IFwiUGFjbyBBbGPDoWNlclwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxOCwgbmFtZTogXCJKb3JkaSBBbGJhXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAxOSwgbmFtZTogXCJEaWduZVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMjAsIG5hbWU6IFwiU2VyZ2kgUm9iZXJ0b1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAyMSwgbmFtZTogXCJBbmRyw6kgR29tZXNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMjIsIG5hbWU6IFwiQWxlaXggVmlkYWxcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAvLyAgICAgeyBpZDogMjMsIG5hbWU6IFwiVW10aXRpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAyNCwgbmFtZTogXCJNYXRoaWV1XCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxuICAgIC8vICAgICB7IGlkOiAyNSwgbmFtZTogXCJNYXNpcFwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxuICAgIC8vICk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuICAgIGdldEl0ZW1zRGF0YSgpIHtcbiAgICAgICAgbGV0IHJlcXMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgcmVxcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzEwLjAuMi4yOjgwMDAvdG91cm5hbWVudHMnKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xuICAgICAgICAgICAgICAgIHRoYXQuaXRlbXMgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICBwbGF5ZXJQYXJ0aWNpcGF0ZShwb3N0SnNvbikge1xuICAgICAgICBsZXQgcmVxcyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICByZXFzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wbGF5ZXItdG91cm5hbWVudHMvJywgcG9zdEpzb24sIHJlcXMpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbSh0b3VybmFtZW50X3JlZjogbnVtYmVyKSB7XG4gICAgICAgIGxldCByZXFzID0gbmV3IFJlcXVlc3RPcHRpb25zKCk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJlcXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly8xMC4wLjIuMjo4MDAwL3RvdXJuYW1lbnRzLycgKyB0b3VybmFtZW50X3JlZilcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcbiAgICAgICAgICAgICAgICB0aGF0Lml0ZW1zID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=