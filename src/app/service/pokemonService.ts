import {Injectable} from "@angular/core";
import {HttpService} from './httpService';
import {TreinadorService} from './treinadorService';
import {ChangePowerComponent} from '../components/change-power/change-power.component';


@Injectable()
export class PokemonService {

    baseReceiveExp = 50;
    toChangePower: any = [];
    changePowerPanel: ChangePowerComponent;

    constructor(private http: HttpService, private treinadorService: TreinadorService) {}

    async receiveExp(pokemons, level) {
        const totalExp = Math.floor(this.baseReceiveExp * Math.pow(1.05, level));
        const exp = totalExp / pokemons.length;

        for (let i = 0; i < pokemons.length; i++) {
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
                await this.checkEvolution(pokemons[i]);
                await this.checkAttack(pokemons[i]);
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
        this.treinadorService.updateExp((totalExp / 6));
        return totalExp;
    }

    async checkEvolution(pokemon) {
        try {
            const checkEvolution: any = await this.http.post('/pokemon/check-evolution', pokemon).toPromise();
            if (checkEvolution && pokemon.level >= checkEvolution.minLevel) {
                pokemon.pokemon = checkEvolution.target;
                pokemon.attack = Math.floor(pokemon.attack * 1.03);
                pokemon.specialAttack = Math.floor(pokemon.specialAttack * 1.03);
                pokemon.defense = Math.floor(pokemon.defense * 1.03);
                pokemon.specialDefense = Math.floor(pokemon.specialDefense * 1.03);
                pokemon.hp = Math.floor(pokemon.hp * 1.03);
                pokemon.speed = Math.floor(pokemon.speed * 1.03);
                await this.http.post('/pokemon/update', pokemon).toPromise();
            }
        } catch (e) {
            console.log(e);
        }
        return true;
    }

    async checkAttack(pokemon) {
        try {
            const checkAttack: any = await this.http.post('/pokemon/check-attack', pokemon).toPromise();
            if (checkAttack.length > 0) {
                if (!pokemon.move2) {
                    pokemon.move2 = checkAttack[0].move;
                    checkAttack.shift();
                }
                if (!pokemon.move3 && checkAttack.length > 0) {
                    pokemon.move3 = checkAttack[0].move;
                    checkAttack.shift();
                }
                if (!pokemon.move4 && checkAttack.length > 0) {
                    pokemon.move4 = checkAttack[0].move;
                    checkAttack.shift();
                }
                if (checkAttack.length > 0) {
                    await checkAttack.forEach((attack) => this.toChangePower.push({pokemon, move: attack.move}));
                    this.changePowerPanel.open();
                }
            }
        } catch (e) {
            console.log(e);
        }
        return true;
    }

}
