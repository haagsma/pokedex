import {TreinadorService} from '../service/treinadorService';
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class CadastroGuard implements CanActivate {

    constructor(private treinador: TreinadorService, private router: Router) {}

    canActivate() {
        if (this.treinador.email) {
            return true;
        } else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}