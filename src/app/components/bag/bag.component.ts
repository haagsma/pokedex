import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';


@Component({
    selector: 'bag-component',
    templateUrl: './bag.component.html',
    styleUrls: ['./bag.component.css']
})
export class BagComponent {
    bag = false;

    constructor(private treinador: TreinadorService) {}

    open() {
        this.bag = true;
    }

    getPokeballs() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'standard-balls');
    }
    getPotions() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'healing');
    }
    getTms() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'all-machines');
    }
}