import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';
import {HttpService} from '../../service/httpService';
import {PokemonService} from '../../service/pokemonService';


@Component({
    selector: 'change-power',
    templateUrl: './change-power.component.html',
    styleUrls: ['./change-power.component.css']
})
export class ChangePowerComponent {

    activePanelPower = false;
    currencyMove: any = {};
    pokemon: any = {};

    constructor(private treinador: TreinadorService, private http: HttpService, private pokemonService: PokemonService) {}

    open() {
        if (!this.activePanelPower) {
            this.currencyMove = this.pokemonService.toChangePower[0].move;
            this.pokemon = this.pokemonService.toChangePower[0].pokemon;
            this.pokemonService.toChangePower.shift();
            this.activePanelPower = true;
        }
    }

    async changeMove(n) {
        try {
            switch (n) {
                case 1:
                    this.pokemon.move1 = this.currencyMove;
                    break;
                case 2:
                    this.pokemon.move2 = this.currencyMove;
                    break;
                case 3:
                    this.pokemon.move3 = this.currencyMove;
                    break;
                case 4:
                    this.pokemon.move4 = this.currencyMove;
                    break;
            }
            await this.http.post('/pokemon/update', this.pokemon).toPromise();

            this.treinador.team = await this.treinador.team.map((p) => {
                if (p.id === this.pokemon.id) {
                    p = JSON.parse(JSON.stringify(this.pokemon));
                }
                return p;
            });
            this.pokemonService.toChangePower = await this.pokemonService.toChangePower.filter((p) => {
                if (p.pokemon.id === this.pokemon.id) {
                    p.pokemon = JSON.parse(JSON.stringify(this.pokemon));
                }
                return p;
            });
            this.exit();
        } catch (e) {
            console.log('error', e);
        }
    }

    exit() {
        if (this.pokemonService.toChangePower.length > 0) {
            this.currencyMove = this.pokemonService.toChangePower[0].move;
            this.pokemon = this.pokemonService.toChangePower[0].pokemon;
            this.pokemonService.toChangePower.shift();
            this.activePanelPower = true;
        } else {
            this.activePanelPower = false;
        }
    }
}