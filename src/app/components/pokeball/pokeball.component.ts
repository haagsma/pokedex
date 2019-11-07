import {Component} from '@angular/core';


@Component({
    selector: 'pokeball-component',
    templateUrl: './pokeball.component.html',
    styleUrls: ['./pokeball.component.css']
})
export class PokeballComponent {
    pokeball = false;


    open() {
        this.pokeball = true;
    }
}