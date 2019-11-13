import {Injectable} from "@angular/core";
import {HttpService} from './httpService';
import {tryCatch} from 'rxjs/internal-compatibility';


@Injectable()
export class TreinadorService {

    id;
    nick: string;
    level;
    exp;
    status: any;
    team: any[];
    pokemons: any[];
    items;
    amount;
    logged = false;

    constructor(private http: HttpService) {}

    updateExp(exp) {
        this.exp += exp;
        if (this.exp > Math.floor(100 * Math.pow(1.1, this.level))) {
            this.exp -= Math.floor(100 * Math.pow(1.1, this.level));
            this.level++;
        }
        try {
            const res = this.http.post('/treinador/attexp', {id: this.id, exp: this.exp, level: this.level}).toPromise();
        } catch (e) {
            console.log('Não foi possível salvar exp');
        }
    }

    useItem(item) {
        this.items = this.items.map((i) => {
            if (i.id === item.id) {
                i.amount--;
                try {
                   const res = this.http.post('/treinador/useitem', i).toPromise();
                } catch (e) {
                    console.log('item não atualizado');
                }
            }
            return i;
        });
    }

    async catched(pokemon) {
        pokemon.exp = 0;
        pokemon.treinador = {id: this.id};
        pokemon.hp = pokemon.maxHp;
        const inBag = this.team.filter((p) => p.inBag = true);
        if (inBag.length < 6) {
            pokemon.inBag = true;
            pokemon.order = inBag.length + 1;
            this.team.push(pokemon);
        } else {
            pokemon.inBag = false;
            pokemon.order = null;
            this.pokemons.push(pokemon);
        }
        try {
            const res: any = await this.http.post('/treinador/catched', pokemon).toPromise();
            pokemon.id = res.id;
        } catch (e) {
            console.log('pokemon catched error');
        }
    }
    getMoney(money) {
        this.amount += money;
        this.http.post('/treinador/getmoney', {id: this.id, money}).toPromise();
    }

}
