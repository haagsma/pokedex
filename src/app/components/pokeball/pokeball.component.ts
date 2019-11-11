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
}