import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';
import {HttpService} from '../../service/httpService';
import {MessageService} from 'primeng/api';
import {BlockService} from '../../service/blockService';
import {PokemonService} from '../../service/pokemonService';


@Component({
    selector: 'bag-component',
    templateUrl: './bag.component.html',
    styleUrls: ['./bag.component.css']
})
export class BagComponent {
    bag = false;
    stoneEvolutionPanel;
    pokemonsToEvolution: any = [];

    constructor(private treinador: TreinadorService, private http: HttpService, private msg: MessageService, private block: BlockService, private pokemonService: PokemonService) {}

    open() {
        this.bag = true;
    }

    getPokeballs() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'standard-balls');
    }
    getPotions() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'healing');
    }
    getTms() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'all-machines');
    }
    getSpecials() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'evolution');
    }

    async useSpecial(item) {
        this.block.activeBlock();
        if (item.item.category.name === 'evolution') {
            try {
                const evolucoes: any = await this.http.post('/pokemon/check-evolution-stone', item.item).toPromise();
                if (evolucoes.length > 0) {
                    this.pokemonsToEvolution = this.treinador.getAllPokemons().map((p) => {
                        let target;
                        if (evolucoes.filter( e => {
                            if (e.pokemon.id === p.pokemon.id) {
                                target = e.target;
                                return true;
                            } else {
                                return false;
                            }
                        }).length > 0)
                        {
                            return {pokemon: p, target, item};
                        }
                    });
                    this.pokemonsToEvolution = this.pokemonsToEvolution.filter((p) => p);
                    if (this.pokemonsToEvolution.length > 0) {
                        this.stoneEvolutionPanel = true;
                    } else {
                        this.msg.add({severity: 'info', summary: 'Ops...', detail: 'Você não tem nenhum pokemon para evoluir com este item!'});
                    }
                }
            } catch (e) {
                console.log(e);
            }
        }
        this.block.unBlock();
    }

    async evoluir(evolucao) {
        this.block.activeBlock();
        try {
            const source = evolucao.pokemon.pokemon;
            evolucao.pokemon.pokemon = evolucao.target;
            await this.pokemonService.evolutionStone(evolucao.pokemon);
            await this.treinador.useItem(evolucao.item);
            this.pokemonService.openPanelEvolve(source, evolucao.target);
            this.stoneEvolutionPanel = false;
            this.pokemonsToEvolution = [];
        } catch (e) {
            console.log(e);
        }
        this.block.unBlock();
    }
}