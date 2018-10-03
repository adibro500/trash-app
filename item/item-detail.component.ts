import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Http } from "@angular/http";
import * as ApplicationSettings from "application-settings";

@Component({

    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ['./styles.items.scss']

})
export class ItemDetailComponent implements OnInit {
    item: any;
    items: any[];
    tour_ref;
    id;

    participate() {
        let data = {
            'player_ref': ApplicationSettings.getNumber('player_id'),
            'tr_ref': this.id
        }
        console.log('mkl', data);
        this.itemService.playerParticipate(data).subscribe(res => { console.log(res) });
    }
    constructor(
        private itemService: ItemService,
        private http: Http,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.items = [];
        this.itemService.getItemsData()
            .subscribe(res => {
                this.items = res;
                console.log('kl', this.items);
                if (this.items.length !== 0) {
                    this.id = this.route.snapshot.params["tournament_ref"];
                    this.itemService.getItem(this.id)
                        .subscribe(res => {
                            this.item = res;
                        })
                }
            })
    }
}
