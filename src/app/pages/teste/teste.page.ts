import {Component} from "@angular/core";


@Component({
    selector: 'teste-page',
    templateUrl: './teste.page.html',
    styleUrls: ['./teste.page.css']
})
export class TestePage {
    battlePanel = true;
    oponent: any = {};
    challenger: any = {};
    attacking = false;
    inBattle = [];
    exp = 0;
    gym: any;

    itemsPanel = false;
    pokemonPanel = false;
}