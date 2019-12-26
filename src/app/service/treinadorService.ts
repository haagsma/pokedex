import {Injectable} from "@angular/core";
import {HttpService} from './httpService';
import {MessageService} from 'primeng/api';
import {BlockService} from './blockService';

@Injectable()
export class TreinadorService {

    id;
    nick: string;
    level;
    exp;
    avatar;
    status: any;
    team: any[] = [];
    pokemons: any[] = [];
    items: any = [];
    amount;
    logged = false;
    email: string;

    constructor(private http: HttpService, private msg: MessageService, private blockService: BlockService) {}

    updateExp(exp) {
        if(this.level >= 100) return null;
        this.exp += exp;
        if (this.exp > Math.round(100 * Math.pow(1.1, this.level))) {
            this.exp -= Math.round(100 * Math.pow(1.1, this.level));
            this.level++;
        }
        try {
            this.http.post('/treinador/attexp', {id: this.id, exp: this.exp, level: this.level}).toPromise();
        } catch (e) {
            console.log('Não foi possível salvar exp do treinador!');
        }
    }

    useItem(item) {
        this.items = this.items.map((i) => {
            if (i.id === item.id) {
                i.amount--;
                try {
                   this.http.post('/treinador/useitem', i).toPromise();
                } catch (e) {
                    console.log('item não atualizado');
                }
            }
            return i;
        });
    }

    async catched(pokemon) {
        this.blockService.activeBlock();
        let team;
        pokemon.exp = 0;
        pokemon.treinador = {id: this.id};
        pokemon.hp = pokemon.maxHp;
        const inBag = this.team.filter((p) => p.inBag = true);
        if (inBag.length < 6) {
            pokemon.inBag = true;
            pokemon.order = inBag.length + 1;
            team = true;
        } else {
            pokemon.inBag = false;
            pokemon.order = null;
            team = false;
        }
        try {
            pokemon = await this.http.post('/treinador/catched', pokemon).toPromise();
            if (team) {
                this.team.push(pokemon);
            } else {
                this.pokemons.push(pokemon);
            }
            this.msg.add({severity: 'success', summary: 'Catched', detail: pokemon.pokemon.name + ' capturado!'});
        } catch (e) {
            this.msg.add({severity: 'warning', summary: 'Missed', detail: pokemon.pokemon.name + ' missed!'});
        }
        this.blockService.unBlock();
    }

    async sortTeam() {
        const toUpdate = [];
        this.team = await this.team.sort((p1, p2) => {
            if (p1.order < p2.order) return -1;
            if (p1.order > p2.order) return 1;
        });
        this.team = await this.team.map((p, index) => {
            if (p.order !== (index + 1)) {
                   p.order = index + 1;
                   toUpdate.push(p);
            }
            return p;
        });
        toUpdate.forEach((p) => {
            try {
                this.http.post('/pokemon/update', p).toPromise();
            } catch (e) {
                console.log(e);
            }
        });
        return true;
    }

    getMoney(money) {
        try {
            this.amount += money;
            this.http.post('/treinador/getmoney', {id: this.id, money}).toPromise();
        } catch (e) {
            console.log(e);
        }
    }

    getAllPokemons() {
        const pokemons: any = [];
        pokemons.push(...this.pokemons);
        pokemons.push(...this.team);
        return pokemons;
    }

    getBadges() {
        const badges = localStorage.getItem('badges') || JSON.stringify([]);
        return JSON.parse(badges);
    }

    cleanBadges() {
        // const badges = this.getBadges();
        // for (const i in badges) {
        //     localStorage.removeItem(badges[i]);
        // }
        localStorage.removeItem('badges');
    }

    setBadges(badges) {
        localStorage.setItem('badges', JSON.stringify(badges));
    }

    getBadge(badge) {
        return Number(localStorage.getItem(badge));
    }

    setBadge(badge) {
        const badges = this.getBadges();
        if (badges.includes(badge)) {
            localStorage.setItem(badge, new Date().getTime().toString());
        } else {
            badges.push(badge);
            this.setBadges(badges);
            localStorage.setItem(badge, new Date().getTime().toString());
        }
    }
    getTeam(id) {
        return this.http.get('/treinador/team/' + id);
    }

}
