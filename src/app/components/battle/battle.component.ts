import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';
import {BattleService} from '../../service/battleService';

declare const Math: any;

@Component({
    selector: 'battle-component',
    templateUrl: './battle.component.html',
    styleUrls: ['./battle.component.css']
})
export class BattleComponent {

    battlePanel = false;
    oponent: any = {};
    challenger: any = {};
    attacking = true;

    attackPanel = false;
    itemsPanel = false;
    pokemonPanel = false;

    constructor(private treinador: TreinadorService, private battleService: BattleService) {}

    startBattle(pokemon) {
        this.challenger.team = this.treinador.team;
        this.challenger.pokemon = this.challenger.team[0];
        this.oponent.pokemon = pokemon;
        this.challengerStatus();
        this.oponentStatus();
        console.log(this.challenger.pokemon);
        this.battlePanel = true;

    }

    attack(move) {
        this.attacking = false;
        let damage = (this.challenger.pokemon.attack * (move.power / 100));
        damage = damage - (damage * (this.oponent.pokemon.defense / 1000));
        damage = damage * this.battleService.elementalAdvantage(move, this.oponent.pokemon.pokemon.types);
        this.oponent.pokemon.hp -= Math.floor(damage);

        setTimeout(() => {
            damage = (this.oponent.pokemon.attack * (this.oponent.pokemon.move1.power / 100));
            damage = damage - (damage * (this.challenger.pokemon.defense / 800));
            damage = damage * this.battleService.elementalAdvantage(this.oponent.pokemon.move1, this.challenger.pokemon.pokemon.types);
            this.challenger.pokemon.hp -= Math.floor(damage);
        }, 1000);
        this.attacking = true;
    }

    challengerStatus() {
        this.challenger.pokemon.maxHp = this.challenger.pokemon.hp;
    }
    oponentStatus() {
        //Math.random() * (max - min) + min;
        this.oponent.pokemon.hp = Math.floor((Math.random() * ((50 + 2) - (50 - 2)) + (50 - 2)));
        this.oponent.pokemon.attack = Math.floor((Math.random() * ((40 + 2) - (40 - 2)) + (40 - 2)));
        this.oponent.pokemon.specialAttack = Math.floor((Math.random() * ((40 + 2) - (40 - 2)) + (40 - 2)));
        this.oponent.pokemon.defense = Math.floor((Math.random() * ((35 + 2) - (35 - 2)) + (35 - 2)));
        this.oponent.pokemon.specialDefense = Math.floor((Math.random() * ((35 + 2) - (35 - 2)) + (35 - 2)));
        this.oponent.pokemon.speed = Math.floor((Math.random() * ((20 + 2) - (20 - 2)) + (20 - 2)));
        if (this.treinador.level > 1) {
            for (let i = 1; i < this.treinador.level; i++) {
                this.oponent.pokemon.hp = this.oponent.pokemon.hp * 1.03;
                this.oponent.pokemon.attack = this.oponent.pokemon.attack * 1.03;
                this.oponent.pokemon.specialAttack = this.oponent.pokemon.specialAttack * 1.03;
                this.oponent.pokemon.defense = this.oponent.pokemon.defense * 1.03;
                this.oponent.pokemon.specialDefense = this.oponent.pokemon.specialDefense * 1.03;
                this.oponent.pokemon.speed = this.oponent.pokemon.speed * 1.03;
            }
        }
        this.oponent.pokemon.maxHp = this.oponent.pokemon.hp;
    }
}