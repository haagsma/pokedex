import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';
import {BattleService} from '../../service/battleService';
import {MessageService} from 'primeng/api';
import {PokemonService} from '../../service/pokemonService';

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
    attacking = false;
    inBattle = [];
    exp = 0;

    attackPanel = false;
    itemsPanel = false;
    pokemonPanel = false;

    constructor(private treinador: TreinadorService,
                private battleService: BattleService,
                private msg: MessageService,
                private pokemonService: PokemonService) {}

    startBattle(pokemon) {
        console.log(this.treinador.team);
        this.exp = 0;
        this.challenger.team = null;
        this.challenger.team = JSON.parse(JSON.stringify(this.treinador.team));
        this.challenger.pokemon = this.challenger.team[0];
        this.oponent.pokemon = pokemon;
        this.challengerStatus();
        this.oponentStatus(this.treinador.level);
        this.inBattle = [this.challenger.pokemon];
        this.battlePanel = true;
    }

    changePokemon(pokemon) {
        this.inBattle.push(pokemon);
        const attack = this.challenger.pokemon.hp > 0;
        this.challenger.pokemon = pokemon;
        this.challengerStatus();
        this.pokemonPanel = false;
        if (attack) {
            setTimeout(() => {
                this.oponentAttack();
                if (this.challenger.pokemon.hp <= 0) {
                    this.challengerDead();
                }
            }, 750);
        }
    }

    attack(move, panel) {
        panel.visible = false;
        if (this.challenger.pokemon.speed > this.oponent.pokemon.speed || move.priority > 0) {
            this.challengerAttack(move);
            if (this.oponent.pokemon.hp > 0) {
                setTimeout(() => {
                    this.oponentAttack();
                    if (this.challenger.pokemon.hp <= 0) setTimeout(() => this.challengerDead(), 1000);

                }, 1000);
            } else {
                setTimeout(() => this.oponentDead(), 1000);
            }
        } else {
            this.oponentAttack();
            if (this.challenger.pokemon.hp > 0) {
                setTimeout(() => {
                    this.challengerAttack(move);
                    if (this.oponent.pokemon.hp <= 0) setTimeout(() => this.oponentDead(), 1000);
                }, 1000);
            } else {
                setTimeout(() => this.challengerDead(), 1000);
            }
        }
    }

    challengerDead() {
        const vivos: any = this.challenger.team.filter( p => p.hp > 0);
        if (vivos.length > 0) {
            this.pokemonPanel = true;
        } else {
            this.battlePanel = false;
            this.msg.add({severity: 'error', summary: 'Failed', detail: 'Seus Pokemons morreram'});
        }
    }

    oponentDead() {
        this.exp += this.pokemonService.receiveExp(this.inBattle, this.oponent.pokemon.level);
        this.inBattle = [this.challenger.pokemon];
        if (this.oponent.team && this.oponent.team.length > 0) {
            this.oponent.team = this.oponent.team.filter( p => p.hp > 0);
            if (this.oponent.team.length > 0) {
                this.oponent.pokemon = this.oponent.team[0];
            } else {
                this.battlePanel = false;
                this.msg.add({severity: 'success', summary: 'Winner', detail: '+ ' + this.exp + ' exp'});
            }
        } else {
            this.battlePanel = false;
            this.msg.add({severity: 'success', summary: 'Winner', detail: '+ ' + this.exp + ' exp'});
        }
    }

    challengerAttack(move) {
        let damage = (this.challenger.pokemon.attack * (move.power / 100));
        damage = damage - (damage * (this.oponent.pokemon.defense / 1000));
        damage = damage * this.battleService.elementalAdvantage(move, this.oponent.pokemon.pokemon.types);
        if ((this.oponent.pokemon.hp - Math.floor(damage)) < 0) {
            this.oponent.pokemon.hp = 0;
        } else {
            this.oponent.pokemon.hp -= Math.floor(damage);
        }

    }
    oponentAttack() {
        let damage = (this.oponent.pokemon.attack * (this.oponent.pokemon.move1.power / 100));
        damage = damage - (damage * (this.challenger.pokemon.defense / 1000));
        damage = damage * this.battleService.elementalAdvantage(this.oponent.pokemon.move1, this.challenger.pokemon.pokemon.types);
        if ((this.challenger.pokemon.hp - Math.floor(damage)) < 0) {
            this.challenger.pokemon.hp = 0;
        } else {
            this.challenger.pokemon.hp -= Math.floor(damage);
        }
    }

    challengerStatus() {
        if (!this.challenger.pokemon.maxHp) {
            this.challenger.pokemon.maxHp = this.challenger.pokemon.hp;
        }
    }
    oponentStatus(level) {
        level = Math.floor(Math.random() * (level - 1) + 1);
        // Math.random() * (max - min) + min;
        this.oponent.pokemon.level = level;
        this.oponent.pokemon.hp = Math.floor((Math.random() * ((50 + 2) - (50 - 2)) + (50 - 2)) * Math.pow(1.03, (level - 1)));
        this.oponent.pokemon.attack = Math.floor((Math.random() * ((40 + 2) - (40 - 2)) + (40 - 2)) * Math.pow(1.03, (level - 1)));
        this.oponent.pokemon.specialAttack = Math.floor((Math.random() * ((40 + 2) - (40 - 2)) + (40 - 2)) * Math.pow(1.03, (level - 1)));
        this.oponent.pokemon.defense = Math.floor((Math.random() * ((35 + 2) - (35 - 2)) + (35 - 2)) * Math.pow(1.03, (level - 1)));
        this.oponent.pokemon.specialDefense = Math.floor((Math.random() * ((35 + 2) - (35 - 2)) + (35 - 2)) * Math.pow(1.03, (level - 1)));
        this.oponent.pokemon.speed = Math.floor((Math.random() * ((20 + 2) - (20 - 2)) + (20 - 2)) * Math.pow(1.03, (level - 1)));
        this.oponent.pokemon.maxHp = this.oponent.pokemon.hp;
    }
}