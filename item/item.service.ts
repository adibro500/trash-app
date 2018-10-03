import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class ItemService {
    private items = new Array<Item>();
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

    constructor(private http: Http) { }
    getItemsData() {
        let reqs = new RequestOptions();
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        let that = this;
        return this.http.get('http://10.0.2.2:8000/tournaments')
            .map(res => {
                console.log(res.json());
                that.items = res.json();
                return res.json()
            })


    }

    playerParticipate(postJson) {
        let reqs = new RequestOptions();
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        return this.http.post('http://localhost:8000/player-tournaments/', postJson, reqs)
            .map(res => {
                return res.json()
            })
    }

    getItems(): Item[] {
        return this.items;
    }

    getItem(tournament_ref: number) {
        let reqs = new RequestOptions();
        let headers = new Headers();
        headers.append('content-type', 'application/json');
        reqs.headers = headers;
        let that = this;
        return this.http.get('http://10.0.2.2:8000/tournaments/' + tournament_ref)
            .map(res => {
                console.log(res.json());
                that.items = res.json();
                return res.json()
            })
    }
}
