import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BlockService} from '../../../service/blockService';
import {HttpService} from '../../../service/httpService';
import {MessageService} from 'primeng/api';
import {TreinadorService} from '../../../service/treinadorService';
import {ShopService} from '../../../service/shopService';


@Component({
    selector: 'pokemon-inicial',
    templateUrl: './pokemon-inicial.page.html',
    styleUrls: ['../cadastro-treinador.page.css']
})
export class PokemonInicialPage implements OnInit {

    iniciais: any = [];
    confirmarPanel = false;
    pokemon: any = {};

    constructor(private router: Router,
                private block: BlockService,
                private http: HttpService,
                private msg: MessageService,
                private treinador: TreinadorService,
                private shopService: ShopService) {}


    async ngOnInit() {
        this.block.activeBlock();
        try {
            this.iniciais = await this.http.get('/pokemon/iniciais').toPromise();
        } catch (e) {
            console.log(e);
        }
        this.block.unBlock();
    }
    escolher(pokemon) {
        this.pokemon = pokemon;
        this.confirmarPanel = true;
    }

    async continuar() {
        this.block.activeBlock();
        let treinador: any = {
            nick: this.treinador.nick,
            amount: 0,
            exp: 0,
            level: 1
        };
        try {
            treinador = await this.http.post('/treinador/cadastrar', {treinador, email: this.treinador.email}).toPromise();

            const treinadorPokemon = {
                treinador,
                pokemon: this.pokemon,
                inBag: true,
                order: 1
            };
            await this.http.post('/treinador/pokemon-inicial', treinadorPokemon).toPromise();
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
            this.block.unBlock();
            this.router.navigateByUrl('/home');
        } catch (e) {
            console.log(e);
            this.block.unBlock();
            this.msg.add({severity: 'error', detail: 'Algo deu errado, tenta novamente!', summary: 'Falha'});
            this.router.navigateByUrl('/');
        }
    }
}