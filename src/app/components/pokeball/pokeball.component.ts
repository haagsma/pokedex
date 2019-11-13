import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';


@Component({
    selector: 'pokeball-component',
    templateUrl: './pokeball.component.html',
    styleUrls: ['./pokeball.component.css']
})
export class PokeballComponent {
    pokeball = false;

    constructor(public treinador: TreinadorService) {}

    open() {
        this.pokeball = true;
    }
    level(pokemon) {
        return Math.floor((pokemon.exp*100)/(100*Math.pow(1.1, pokemon.level)));
    }
}