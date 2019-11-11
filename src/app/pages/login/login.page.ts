import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../service/httpService';
import {ShopService} from '../../service/shopService';
import {TreinadorService} from '../../service/treinadorService';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {

  constructor(private router: Router, private http: HttpService, private shop: ShopService, private treinador: TreinadorService) {

  }

  login(form) {
    this.http.get('/treinador/' + form.value.email).subscribe(async (res: any) => {
      console.log(res);
      const treinador = res;
      this.treinador.logged = true;
      this.treinador.nick = treinador.nick;
      this.treinador.level = treinador.level;
      this.treinador.exp = treinador.exp;
      this.treinador.amount = treinador.amount;
      this.treinador.status = treinador.status;
      this.treinador.items = await this.http.get('/treinador/items/' + treinador.id).toPromise();
      const pokemons: any = await this.http.get('/treinador/pokemons/' + treinador.id).toPromise();
      this.treinador.team = pokemons.filter( p => p.inBag = true);
      this.treinador.pokemons = pokemons.filter( p => p.inBag = false);
      this.router.navigateByUrl('/home');
    });
  }

}
