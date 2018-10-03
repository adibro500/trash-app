"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var player_register_service_1 = require("~/player-register.service");
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var PlayerRegistrationComponent = /** @class */ (function () {
    function PlayerRegistrationComponent(http, playerReg, router) {
        this.http = http;
        this.playerReg = playerReg;
        this.router = router;
        this.countries = [];
        this.user_data = {};
        this.selectedIndex = 1;
        this.items = [];
        this.items.push('M');
        this.items.push('F');
        this.items.push('N');
    }
    PlayerRegistrationComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
        console.log('gender', this.items[args.newIndex]);
        this.gender = this.items[args.newIndex];
    };
    PlayerRegistrationComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    PlayerRegistrationComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    PlayerRegistrationComponent.prototype.ngOnInit = function () {
        // let obj = {};
        // this.buildCountries();
        // this.ngOnInit();
    };
    PlayerRegistrationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // for (var i = 0; i < this.countries.length; i++) {
        //   if (this.countries[i] !== undefined) {
        //     this.countryList.push(this.countries[i]['country_name']);
        //   }
        // }
        this.countryList = [];
        this.playerReg.getCountries()
            .subscribe(function (response) {
            _this.countries = response;
            // console.log(this.countries);
            // if (this.countries !== undefined) {
            //   for (var i = 0; i < this.countries.length; i++) {
            //     this.countryList.push(this.countries[i].country_name);
            //   }
            _this.countryList = _this.countries.map(function (obj) {
                return obj.country_name;
            });
            console.log('hj', _this.countries);
            console.log('hj', _this.countryList);
        });
    };
    PlayerRegistrationComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        console.log("picker selection: " + picker.selectedIndex);
        this.picked = picker.selectedIndex;
        this.pickedIndex = ++this.picked;
        // this.user_data['country'] = ++picker.selectedIndex;
    };
    PlayerRegistrationComponent.prototype.submitPlayer = function () {
        var _this = this;
        this.user_data = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "gender": this.gender,
            "country": this.pickedIndex
        };
        // this.data['country'] = this.pickedIndex;
        console.log('afro', JSON.stringify(this.user_data));
        this.playerReg.postRegisterData(this.user_data)
            .subscribe(function (res) {
            console.log(res);
            ApplicationSettings.setNumber('player_id', res.player_ref);
            _this.router.navigate(['/player-register-address']);
        });
    };
    PlayerRegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-player-registration',
            templateUrl: './player-registration.component.html',
            styleUrls: ['./player-registration.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.Http, player_register_service_1.PlayerRegisterService, router_1.Router])
    ], PlayerRegistrationComponent);
    return PlayerRegistrationComponent;
}());
exports.PlayerRegistrationComponent = PlayerRegistrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBcUM7QUFFckMscUVBQWtFO0FBR2xFLDBDQUF5QztBQUN6QywwREFBNEQ7QUFTNUQ7SUFnQ0UscUNBQW1CLElBQVUsRUFBUyxTQUFnQyxFQUFTLE1BQWM7UUFBMUUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTlCN0YsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQU90QixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBRWIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFzQnZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFyQk0sOENBQVEsR0FBZixVQUFnQixJQUFtQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxJQUFJLENBQUMsUUFBUSxZQUFPLElBQUksQ0FBQyxRQUFVLENBQUMsQ0FBQztRQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLDRDQUFNLEdBQWI7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R0M7QUF0R1ksa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBQbGF5ZXJSZWdpc3RlclNlcnZpY2UgfSBmcm9tICd+L3BsYXllci1yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wbGF5ZXItcmVnaXN0cmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYXllci1yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wbGF5ZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGxheWVyUmVnaXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgZGF0YTtcbiAgY291bnRyaWVzOiBhbnlbXSA9IFtdO1xuICBjb3VudHJ5TGlzdDogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIHBpY2tlZDtcbiAgcHVibGljIGZpcnN0X25hbWU7XG4gIHB1YmxpYyBsYXN0X25hbWU7XG4gIHB1YmxpYyBnZW5kZXI7XG4gIHB1YmxpYyBwaWNrZWRJbmRleDogbnVtYmVyO1xuICB1c2VyX2RhdGE6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4ID0gMTtcbiAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+O1xuXG5cblxuICBwdWJsaWMgb25jaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgZnJvbSAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH1gKTtcbiAgICBjb25zb2xlLmxvZygnZ2VuZGVyJywgdGhpcy5pdGVtc1thcmdzLm5ld0luZGV4XSk7XG4gICAgdGhpcy5nZW5kZXIgPSB0aGlzLml0ZW1zW2FyZ3MubmV3SW5kZXhdO1xuICB9XG5cbiAgcHVibGljIG9ub3BlbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICB9XG5cbiAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJEcm9wIERvd24gY2xvc2VkLlwiKTtcbiAgfVxuXG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCwgcHVibGljIHBsYXllclJlZzogUGxheWVyUmVnaXN0ZXJTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5pdGVtcy5wdXNoKCdNJyk7XG4gICAgdGhpcy5pdGVtcy5wdXNoKCdGJyk7XG4gICAgdGhpcy5pdGVtcy5wdXNoKCdOJyk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBsZXQgb2JqID0ge307XG4gICAgLy8gdGhpcy5idWlsZENvdW50cmllcygpO1xuXG4gICAgLy8gdGhpcy5uZ09uSW5pdCgpO1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKHRoaXMuY291bnRyaWVzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgdGhpcy5jb3VudHJ5TGlzdC5wdXNoKHRoaXMuY291bnRyaWVzW2ldWydjb3VudHJ5X25hbWUnXSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHRoaXMuY291bnRyeUxpc3QgPSBbXTtcbiAgICB0aGlzLnBsYXllclJlZy5nZXRDb3VudHJpZXMoKVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueVtdKSA9PiB7XG5cbiAgICAgICAgdGhpcy5jb3VudHJpZXMgPSByZXNwb25zZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb3VudHJpZXMpO1xuICAgICAgICAvLyBpZiAodGhpcy5jb3VudHJpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY291bnRyeUxpc3QucHVzaCh0aGlzLmNvdW50cmllc1tpXS5jb3VudHJ5X25hbWUpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgdGhpcy5jb3VudHJ5TGlzdCA9IHRoaXMuY291bnRyaWVzLm1hcChvYmogPT4ge1xuICAgICAgICAgIHJldHVybiBvYmouY291bnRyeV9uYW1lO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnaGonLCB0aGlzLmNvdW50cmllcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaicsIHRoaXMuY291bnRyeUxpc3QpO1xuICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwicGlja2VyIHNlbGVjdGlvbjogXCIgKyBwaWNrZXIuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICB0aGlzLnBpY2tlZCA9IHBpY2tlci5zZWxlY3RlZEluZGV4O1xuICAgIHRoaXMucGlja2VkSW5kZXggPSArK3RoaXMucGlja2VkO1xuICAgIC8vIHRoaXMudXNlcl9kYXRhWydjb3VudHJ5J10gPSArK3BpY2tlci5zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgc3VibWl0UGxheWVyKCkge1xuICAgIHRoaXMudXNlcl9kYXRhID0ge1xuICAgICAgXCJmaXJzdF9uYW1lXCI6IHRoaXMuZmlyc3RfbmFtZSxcbiAgICAgIFwibGFzdF9uYW1lXCI6IHRoaXMubGFzdF9uYW1lLFxuICAgICAgXCJnZW5kZXJcIjogdGhpcy5nZW5kZXIsXG4gICAgICBcImNvdW50cnlcIjogdGhpcy5waWNrZWRJbmRleFxuICAgIH1cblxuICAgIC8vIHRoaXMuZGF0YVsnY291bnRyeSddID0gdGhpcy5waWNrZWRJbmRleDtcbiAgICBjb25zb2xlLmxvZygnYWZybycsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcl9kYXRhKSk7XG4gICAgdGhpcy5wbGF5ZXJSZWcucG9zdFJlZ2lzdGVyRGF0YSh0aGlzLnVzZXJfZGF0YSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldE51bWJlcigncGxheWVyX2lkJywgcmVzLnBsYXllcl9yZWYpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wbGF5ZXItcmVnaXN0ZXItYWRkcmVzcyddKTtcbiAgICAgIH1cbiAgICAgIClcblxuICB9XG5cbn1cbiJdfQ==