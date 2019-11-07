import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../service/httpService';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {

  constructor(private router: Router, private http: HttpService) {

  }

  login(form) {
    this.http.get('/treinador/' + form.value.email).subscribe(async (res: any) => {
      console.log(res);
      const treinador = res;
      const items = await this.http.get('/treinador/items/' + treinador.id).toPromise();
      const pokemons = await this.http.get('/treinador/pokemons/' + treinador.id).toPromise();
      this.router.navigateByUrl('/home');
    });
  }

}
