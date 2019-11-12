import {Injectable} from "@angular/core";
import {HttpService} from './httpService';
import {TreinadorService} from './treinadorService';


@Injectable()
export class PokemonService {

    baseExp = 100;
    baseReceiveExp = 50;

    constructor(private http: HttpService, private treinadorService: TreinadorService) {}

    receiveExp(pokemons, level) {
        console.log('pokemons:', pokemons);
        const totalExp = Math.floor(this.baseReceiveExp * Math.pow(1.05, level));
        const exp = totalExp / pokemons.length;

        for (let i = 0; i < pokemons.length; i++) {
            console.log(pokemons[i].pokemon.name)
            pokemons[i].exp += exp;
            const hp = pokemons[i].hp;
            pokemons[i].hp = pokemons[i].maxHp;
            while (pokemons[i].exp > Math.floor(100 * Math.pow(1.1, pokemons[i].level))) {
                pokemons[i].exp -= Math.floor(100 * Math.pow(1.1, pokemons[i].level));
                pokemons[i].level++;
                pokemons[i].attack = Math.floor(pokemons[i].attack * 1.03);
                pokemons[i].specialAttack = Math.floor(pokemons[i].specialAttack * 1.03);
                pokemons[i].defense = Math.floor(pokemons[i].defense * 1.03);
                pokemons[i].specialDefense = Math.floor(pokemons[i].specialDefense * 1.03);
                pokemons[i].hp = Math.floor(pokemons[i].hp * 1.03);
                pokemons[i].speed = Math.floor(pokemons[i].speed * 1.03);
            }
            this.treinadorService.team = this.treinadorService.team.map((p) => {
                if (p.id === pokemons[i].id) {
                    p = JSON.parse(JSON.stringify(pokemons[i]));
                }
                return p;
            });
            try {
                const res = this.http.post('/pokemon/att', pokemons[i]).toPromise();
            } catch (e) {
                console.log('Erro ao salvar os  atributos do pokemon');
            }
            pokemons[i].hp = hp;
        }
        return totalExp;
    }

    checkLevel(exp) {
        let level = 1;
        let baseExp = 100;
        while (exp >= baseExp) {
            baseExp = Math.floor(baseExp * 1.1);
            level++;
        }
        return level;
    }

}
