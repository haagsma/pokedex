import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'cadastro-treinador',
    templateUrl: './cadastro-treinador.page.html',
    styleUrls: ['./cadastro-treinador.page.css']
})
export class CadastroTreinadorPage {

    constructor(private router: Router) {}

    continuar() {
        this.router.navigateByUrl('/pokemon-inicial');
    }

}