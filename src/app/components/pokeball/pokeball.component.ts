import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';
import {HttpService} from '../../service/httpService';


@Component({
    selector: 'pokeball-component',
    templateUrl: './pokeball.component.html',
    styleUrls: ['./pokeball.component.css']
})
export class PokeballComponent {
    pokeball = false;
    detailPanel = false;

    pokemonDetail: any = {};

    constructor(public treinador: TreinadorService, private http: HttpService) {}

    open() {
        this.pokeball = true;
    }
    openDetail(pokemon) {
        this.pokemonDetail = pokemon;
        this.detailPanel = true;
    }
    async principal(pokemon) {
        this.detailPanel = false;
        let firstPokemon;
        let upload = false;
        this.treinador.team = await this.treinador.team.map((p) => {
            if (p.order === 1 && p.order !== pokemon.order) {
                p.order = pokemon.order;
                firstPokemon = p;
                upload = true;
            }
            return p;
        });
        if (upload && firstPokemon) {
            pokemon.order = 1;
            await this.treinador.sortTeam();
            try {
                this.http.post('/pokemon/update', pokemon).toPromise();
                this.http.post('/pokemon/update', firstPokemon).toPromise();
            } catch (e) {

            }
        }
    }
    async guardar(pokemon) {
        this.detailPanel = false;
        pokemon.order = null;
        pokemon.inBag = false;
        this.treinador.team = await this.treinador.team.filter((p) => p.id !== pokemon.id);
        this.treinador.pokemons.push(pokemon);
        this.treinador.sortTeam();
        try {
            this.http.post('/pokemon/update', pokemon).toPromise();
        } catch (e) {

        }
    }
    async recrutar(pokemon) {
        pokemon.order = this.treinador.team.length + 1;
        pokemon.inBag = true;
        this.treinador.pokemons = await this.treinador.pokemons.filter((p) => p.id !== pokemon.id);
        this.treinador.team.push(pokemon);
        this.detailPanel = false;
        try {
            const res: any = await this.http.get('/treinador/pokemons/' + this.treinador.id).toPromise();
            const length = res.filter( p => p.inBag === true);
            if (length.length < 6) {
                await this.http.post('/pokemon/update', pokemon).toPromise();
            } else {
                pokemon.order = null;
                pokemon.inBag = false;
                this.treinador.team = await this.treinador.team.filter((p) => p.id !== pokemon.id);
                this.treinador.pokemons.push(pokemon);
                this.treinador.sortTeam();
            }
        } catch (e) {
            pokemon.order = null;
            pokemon.inBag = false;
            this.treinador.team = await this.treinador.team.filter((p) => p.id !== pokemon.id);
            this.treinador.pokemons.push(pokemon);
            this.treinador.sortTeam();
        }
    }
    level(pokemon) {
        return Math.floor((pokemon.exp*100)/(100*Math.pow(1.1, pokemon.level)));
    }
}