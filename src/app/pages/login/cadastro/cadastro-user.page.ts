import {Component} from '@angular/core';
import {HttpService} from '../../../service/httpService';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
    selector: 'cadastro-user',
    templateUrl: './cadastro-user.page.html',
    styleUrls: ['../login.page.css']
})
export class CadastroUserPage {

    constructor(private http: HttpService, private router: Router, private msg: MessageService) {}

    cadastrar(form) {
        if(form.valid) {
            form.value.status = {id: 1};
            this.http.post('/user/', form.value).subscribe((res: any) => {
                this.msg.add({severity: 'success', detail: 'Conta criada com sucesso!', summary: 'Sucesso'});
                this.router.navigateByUrl('/');
            }, (e) => {
                this.msg.add({severity: 'error', detail: 'Erro ao criar conta, tenta mais tarde!', summary: 'Failed'});
                console.log(e);
            });
        } else {
            this.msg.add({severity: 'error', detail: 'Preencha todos os campos corretamente!', summary: 'Failed'});
        }
    }
}