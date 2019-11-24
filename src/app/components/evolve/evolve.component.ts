import {Component} from '@angular/core';
import {BlockService} from '../../service/blockService';
import {PokemonService} from '../../service/pokemonService';


@Component({
    selector: 'evolve-panel',
    templateUrl: './evolve.component.html',
    styleUrls: ['./evolve.component.css']
})
export class EvolveComponent {
    evolvePanel: any;
    giftPanel: any;
    source: any;
    target: any;

    constructor(public pokemonService: PokemonService) {}

}