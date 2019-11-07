import {Component, Input} from '@angular/core';
import {HttpService} from '../../service/httpService';


@Component({
    selector: 'pokedex-view',
    templateUrl: './pokedex-component.html',
    styleUrls: ['./pokedex-component.css']
})
export class PokedexViewComponent {

    pokedex = false;
    pokedexList = [];
    page = 0;
    loading = false;

    constructor( private http: HttpService) {}

    open() {
        if(this.pokedexList.length < 1) {
            this.list();
        }
        this.pokedex = true;
    }

    list() {
        this.loading = true;
        this.http.get('/pokemon/pokedex?size=100&page=' + this.page).subscribe((res: any) => {
            this.pokedexList = res.content;
            this.loading = false;
        });
    }

    more() {
        this.loading = true;
        this.page++;
        this.http.get('/pokemon/pokedex?size=100&page=' + this.page).subscribe((res: any) => {
            this.pokedexList.push(...res.content);
            this.loading = false;
        });
    }

}