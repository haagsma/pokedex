import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../service/httpService';
import {BlockService} from '../../../service/blockService';
import {MessageService} from 'primeng/api';
import {TreinadorService} from '../../../service/treinadorService';


@Component({
    selector: 'avatar-treinador',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css', '../cadastro-treinador.page.css']
})
export class AvatarPage {

    avatares = Array.from({length: 19}, (v, k) => k + 1);

    constructor(private router: Router,
                private http: HttpService,
                private block: BlockService,
                private msg: MessageService,
                private treinador: TreinadorService) {}

    async continuar(avatar) {
        this.treinador.avatar = avatar;
        this.router.navigateByUrl('/pokemon-inicial');
    }

}