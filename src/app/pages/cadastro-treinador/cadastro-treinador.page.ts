import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../service/httpService';
import {BlockService} from '../../service/blockService';
import {MessageService} from 'primeng/api';


@Component({
    selector: 'cadastro-treinador',
    templateUrl: './cadastro-treinador.page.html',
    styleUrls: ['./cadastro-treinador.page.css']
})
export class CadastroTreinadorPage {

    constructor(private router: Router,
                private http: HttpService,
                private block: BlockService,
                private msg: MessageService) {}

    async continuar(form) {
        this.block.activeBlock();
        try {
            const nick: any = await this.http.get('/treinador/nick/' + form.value.nick).toPromise();
            console.log(nick);
            if (nick) {
                this.msg.add({severity: 'error', detail: 'Nome já existente!', summary: 'Falha'});
            } else {
                this.router.navigateByUrl('/pokemon-inicial');
            }
        } catch (e) {
            this.msg.add({severity: 'error', detail: 'Algo deu errado, tente mais tarde!', summary: 'Falha'});
        }
        this.block.unBlock();
    }

}