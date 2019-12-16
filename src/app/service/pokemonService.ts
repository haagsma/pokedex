import {Injectable} from "@angular/core";
import {HttpService} from './httpService';
import {TreinadorService} from './treinadorService';
import {ChangePowerComponent} from '../components/change-power/change-power.component';
import {MessageService} from 'primeng/api';
import {BlockService} from './blockService';


@Injectable()
export class PokemonService {

    baseReceiveExp = 50;
    toChangePower: any = [];
    changePowerPanel: ChangePowerComponent;

    evolveSource: any;
    evolveTarget: any;
    evolvePanel: any;

    giftPanel: any;

    constructor(private http: HttpService, private treinadorService: TreinadorService, private msg: MessageService, private block: BlockService) {}

    async receiveExp(pokemons, level) {
        const totalExp = Math.round(this.baseReceiveExp * Math.pow(1.05, level));
        const exp = totalExp / pokemons.length;

        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].level >= 100) continue;
            pokemons[i].exp += exp;
            const hp = pokemons[i].hp;
            pokemons[i].hp = pokemons[i].maxHp;
            while (pokemons[i].exp > Math.round(100 * Math.pow(1.1, pokemons[i].level))) {
                pokemons[i].exp -= Math.round(100 * Math.pow(1.1, pokemons[i].level));
                pokemons[i].level++;
                pokemons[i] = this.upStatus(pokemons[i]);
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
                const source = pokemon.pokemon;
                pokemon.pokemon = checkEvolution.target;
                pokemon = this.upStatus(pokemon);
                await this.http.post('/pokemon/update', pokemon).toPromise();
                this.openPanelEvolve(source, pokemon.pokemon);
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

    async evolutionStone(pokemon) {
        try {
            pokemon = this.upStatus(pokemon);
            await this.http.post('/pokemon/update', pokemon).toPromise();
        } catch (e) {
            console.log(e);
        }
    }

    openPanelEvolve(source, target) {
        this.evolveSource = source;
        this.evolveTarget = target;
        this.evolvePanel = true;
    }

    async giftPokemon() {
        this.block.activeBlock();
        if (this.treinadorService.getBadges().length >= 8) {
            try {
                const pokemonSorted: any = await this.http.get('/pokemon/gift').toPromise();
                this.evolveSource = pokemonSorted.pokemon;
                pokemonSorted.attack = 180;
                pokemonSorted.specialAttack = 180;
                pokemonSorted.defense = 87;
                pokemonSorted.specialDefense = 87;
                pokemonSorted.speed = 93;
                pokemonSorted.hp = 369;
                pokemonSorted.maxHp = 369;
                await this.treinadorService.catched(pokemonSorted);
                this.treinadorService.cleanBadges();
                this.giftPanel = true;
            } catch (e) {
                this.msg.add({severity: 'error', summary: 'Failed', detail: 'Falha ao salvar o pokemon, verifique sua internet'});
                console.log(e);
            }
        } else {
            this.msg.add({severity: 'warn', summary: 'Opss', detail: 'Você deve completar todos os ginásios para pegar esse presente!'});
        }
        this.block.unBlock();
    }

    defaultStatusEffects(pokemons) {
        return pokemons.map((pokemon) => {
            pokemon.paralized = false;
            pokemon.freezed = false;
            pokemon.poisoned = false;
            pokemon.sleeping = false;
            pokemon.burned = false;
            pokemon.effectSteps = 0;
            return pokemon;
        });
    }

    upStatus(pokemon) {
        pokemon.attack = Math.round(pokemon.attack * 1.03);
        pokemon.specialAttack = Math.round(pokemon.specialAttack * 1.03);
        pokemon.defense = Math.ceil(pokemon.defense * 1.01);
        pokemon.specialDefense = Math.round(pokemon.specialDefense * 1.03);
        pokemon.hp = Math.round(pokemon.hp * 1.04);
        pokemon.speed = Math.round(pokemon.speed * 1.03);
        return pokemon;
    }

    calcStatus(level, pokemon) {
        pokemon.hp = Math.round((Math.random() * ((50 + 2) - (50 - 2)) + (50 - 2)) * Math.pow(1.04, (level - 1)));
        pokemon.attack = Math.round((Math.random() * ((40 + 2) - (40 - 2)) + (40 - 2)) * Math.pow(1.03, (level - 1)));
        pokemon.specialAttack = Math.round((Math.random() * ((40 + 2) - (40 - 2)) + (40 - 2)) * Math.pow(1.03, (level - 1)));
        pokemon.defense = Math.ceil((Math.random() * ((35 + 2) - (35 - 2)) + (35 - 2)) * Math.pow(1.01, (level - 1))) + 35;
        pokemon.specialDefense = Math.round((Math.random() * ((35 + 2) - (35 - 2)) + (35 - 2)) * Math.pow(1.03, (level - 1)));
        pokemon.speed = Math.round((Math.random() * ((20 + 2) - (20 - 2)) + (20 - 2)) * Math.pow(1.03, (level - 1)));
        return pokemon;
    }

}
