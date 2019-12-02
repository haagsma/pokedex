import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../service/httpService';
import {ShopService} from '../../service/shopService';
import {TreinadorService} from '../../service/treinadorService';
import {BlockService} from '../../service/blockService';
import {ConfirmationService, MessageService} from 'primeng/api';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NativeAudio} from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
              private http: HttpService,
              private shopService: ShopService,
              private treinador: TreinadorService,
              private block: BlockService,
              private msg: MessageService,
              private jwt: JwtHelperService,
              private confirm: ConfirmationService,
              private audio: NativeAudio) {}

  ngOnInit() {
      try {
          this.audio.preloadSimple('uniqueId1', '/assets/mp3/inicio.mp3').then(()=> console.log('parou audio')).catch(()=> console.log('nao parou audio'));
          this.audio.loop('uniqueId1').then(()=> console.log('parou audio')).catch(()=> console.log('nao parou audio'));
      } catch (e) {

      }
    this.checkVersion();
    if (localStorage.getItem('emailToTrainer')) {
        this.loadTrainer(localStorage.getItem('emailToTrainer'));
    }
  }

  login(form) {
      this.block.activeBlock();
      this.http.post('/login', form.value).subscribe((res: any) => {
      localStorage.setItem('token', res);
      this.block.unBlock();
      localStorage.setItem('emailToTrainer', form.value.username);
      this.loadTrainer(form.value.username);
      }, (e) => {
        this.block.unBlock();
        this.msg.add({severity: 'error', detail: 'Email ou Login incorreto', summary: 'Falha'});
        console.log(e);
      });
    }

  loadTrainer(email) {
      this.block.activeBlock();
      this.http.get('/treinador/' + email).subscribe(async (res: any) => {
          if (res) {
              const treinador = res;
              this.treinador.logged = true;
              this.treinador.id = treinador.id;
              this.treinador.nick = treinador.nick;
              this.treinador.level = treinador.level;
              this.treinador.exp = treinador.exp;
              this.treinador.amount = treinador.amount;
              this.treinador.status = treinador.status;
              this.treinador.items = await this.http.get('/treinador/items/' + treinador.id).toPromise();
              const pokemons: any = await this.http.get('/treinador/pokemons/' + treinador.id).toPromise();
              this.shopService.items = await this.http.get('/shop/all').toPromise();
              this.treinador.team = pokemons.filter( p => p.inBag === true);
              this.treinador.pokemons = pokemons.filter( p => p.inBag === false);
              this.router.navigateByUrl('/home');
              this.block.unBlock();
          } else {
              this.block.unBlock();
              this.treinador.email = email;
              this.router.navigateByUrl('/cadastro-treinador');
          }
      }, error1 => {
          this.block.unBlock();
      });
  }

  async checkVersion() {
      try {
          const version: any = await this.http.get('/version').toPromise();
          if (version.id !== 2) {
              this.confirm.confirm({
                  message: 'Temos uma nova atualização, deseja baixar agora?',
                  accept: () => {
                      window.open(version.url, '_blank');
                  },
              });
          }
      } catch (e) {
          console.log(e);
          setTimeout(() => this.checkVersion(), 3000);
      }
  }

}
