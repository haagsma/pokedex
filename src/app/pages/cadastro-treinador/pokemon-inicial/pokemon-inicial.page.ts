import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'pokemon-inicial',
    templateUrl: './pokemon-inicial.page.html',
    styleUrls: ['../cadastro-treinador.page.css']
})
export class PokemonInicialPage {

    constructor(private router: Router) {}

    continuar() {
        this.router.navigateByUrl('/home');
    }
}