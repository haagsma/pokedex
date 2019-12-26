import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../service/httpService';
import {BlockService} from '../../service/blockService';
import {MessageService} from 'primeng/api';
import {TreinadorService} from '../../service/treinadorService';


@Component({
    selector: 'cadastro-treinador',
    templateUrl: './cadastro-treinador.page.html',
    styleUrls: ['./cadastro-treinador.page.css']
})
export class CadastroTreinadorPage {

    constructor(private router: Router,
                private http: HttpService,
                private block: BlockService,
                private msg: MessageService,
                private treinador: TreinadorService) {}

    async continuar(form) {
        if (form.valid && form.value.nick !== ' ') {
            this.block.activeBlock();
            try {
                const nick: any = await this.http.get('/treinador/nick/' + form.value.nick).toPromise();
                if (nick) {
                    this.msg.add({severity: 'error', detail: 'Nome já existente!', summary: 'Falha'});
                } else {
                    this.treinador.nick = form.value.nick;
                    this.router.navigateByUrl('/avatar');
                }
            } catch (e) {
                this.router.navigateByUrl('/');
                this.msg.add({severity: 'error', detail: 'Algo deu errado, tente mais tarde!', summary: 'Falha'});
            }
            this.block.unBlock();
        } else {
            this.msg.add({severity: 'error', detail: 'Escolha um nova válido!', summary: 'Falha'});
        }
    }

}