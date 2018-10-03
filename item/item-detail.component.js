"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var http_1 = require("@angular/http");
var ApplicationSettings = require("application-settings");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, http, route) {
        this.itemService = itemService;
        this.http = http;
        this.route = route;
    }
    ItemDetailComponent.prototype.participate = function () {
        var data = {
            'player_ref': ApplicationSettings.getNumber('player_id'),
            'tr_ref': this.id
        };
        console.log('mkl', data);
        this.itemService.playerParticipate(data).subscribe(function (res) { console.log(res); });
    };
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [];
        this.itemService.getItemsData()
            .subscribe(function (res) {
            _this.items = res;
            console.log('kl', _this.items);
            if (_this.items.length !== 0) {
                _this.id = _this.route.snapshot.params["tournament_ref"];
                _this.itemService.getItem(_this.id)
                    .subscribe(function (res) {
                    _this.item = res;
                });
            }
        });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
            styleUrls: ['./styles.items.scss']
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            http_1.Http,
            router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCwrQ0FBNkM7QUFDN0Msc0NBQXFDO0FBQ3JDLDBEQUE0RDtBQVU1RDtJQWNJLDZCQUNZLFdBQXdCLEVBQ3hCLElBQVUsRUFDVixLQUFxQjtRQUZyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFFakMsQ0FBQztJQWJELHlDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRztZQUNQLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNwQixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFRRCxzQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUM7cUJBQzVCLFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ1YsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFBO1lBQ1YsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQW5DUSxtQkFBbUI7UUFSL0IsZ0JBQVMsQ0FBQztZQUVQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBRXJDLENBQUM7eUNBZ0IyQiwwQkFBVztZQUNsQixXQUFJO1lBQ0gsdUJBQWM7T0FqQnhCLG1CQUFtQixDQW9DL0I7SUFBRCwwQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3R5bGVzLml0ZW1zLnNjc3MnXVxuXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IGFueTtcbiAgICBpdGVtczogYW55W107XG4gICAgdG91cl9yZWY7XG4gICAgaWQ7XG5cbiAgICBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAncGxheWVyX3JlZic6IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0TnVtYmVyKCdwbGF5ZXJfaWQnKSxcbiAgICAgICAgICAgICd0cl9yZWYnOiB0aGlzLmlkXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ21rbCcsIGRhdGEpO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLnBsYXllclBhcnRpY2lwYXRlKGRhdGEpLnN1YnNjcmliZShyZXMgPT4geyBjb25zb2xlLmxvZyhyZXMpIH0pO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zRGF0YSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHJlcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2wnLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1widG91cm5hbWVudF9yZWZcIl07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbSh0aGlzLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=