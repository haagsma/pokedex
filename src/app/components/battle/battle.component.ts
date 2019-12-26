import {Component, ViewChild} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';
import {BattleService} from '../../service/battleService';
import {MessageService} from 'primeng/api';
import {PokemonService} from '../../service/pokemonService';
import {ChangePowerComponent} from '../change-power/change-power.component';
import {BlockService} from '../../service/blockService';
import {HttpService} from '../../service/httpService';
import {AudioService} from '../../service/audioService';

declare const Math: any;

@Component({
    selector: 'battle-component',
    templateUrl: './battle.component.html',
    styleUrls: ['./battle.component.css']
})
export class BattleComponent {

    @ViewChild(ChangePowerComponent, null) changeAttack: ChangePowerComponent;

    battlePanel = false;
    oponent: any = {};
    challenger: any = {};
    attacking = false;
    inBattle = [];
    exp = 0;
    gym: any;

    itemsPanel = false;
    pokemonPanel = false;

    constructor(private treinador: TreinadorService,
                private battleService: BattleService,
                private msg: MessageService,
                private pokemonService: PokemonService,
                private blockService: BlockService,
                private http: HttpService,
                private audio: AudioService) {}

    startBattle(pokemon) {
        this.audio.wildBattle();
        setTimeout(() => {
            this.exp = 0;
            this.challenger.team = null;
            this.challenger.team = this.pokemonService.defaultStatusEffects(JSON.parse(JSON.stringify(this.treinador.team)));
            this.challenger.pokemon = this.challenger.team[0];
            this.oponent.pokemon = this.pokemonService.defaultStatusEffects(pokemon, true);
            this.challengerStatus();
            this.oponentStatus(this.treinador.level);
            this.inBattle = [this.challenger.pokemon];
            this.battlePanel = true;
        }, 500);
    }
    async startBattleGym(gym) {
        if (this.treinador.getBadge(gym.badge) !== 0 && (new Date().getTime() - this.treinador.getBadge(gym.badge)) < 43200000) {
            this.msg.add({severity: 'warn', summary: 'Ops....', detail: 'Você deve esperar 12 horas para lutar novamente nesse ginásio!'});
        } else {
            this.audio.gym();
            this.blockService.activeBlock();
            try {
                this.gym = gym;
                this.exp = 0;
                this.challenger.team = null;
                this.challenger.team = this.pokemonService.defaultStatusEffects(JSON.parse(JSON.stringify(this.treinador.team)));
                this.challenger.pokemon = this.challenger.team[0];
                this.oponent.team = await this.http.get('/treinador/pokemons/' + gym.treinador.id).toPromise();
                this.oponent.pokemon = this.oponent.team[0];
                this.challengerStatus();
                this.oponentStatusToGym(this.treinador.level, this.treinador.level > gym.treinador.level);
                this.inBattle = [this.challenger.pokemon];
                this.battlePanel = true;
            } catch (e) {
                this.msg.add({severity: 'error', summary: 'Ops....', detail: 'Houve um erro ao carregar a batalha, verifique sua internet!'});
                console.log(e);
            }
            this.blockService.unBlock();
        }
    }

    async changePokemon(pokemon) {
        if (!this.attacking) {
            this.attacking = true;
            const verify = this.inBattle.filter((p) => p.id === pokemon.id);
            if (verify.length === 0) this.inBattle.push(pokemon);
            const attack = this.challenger.pokemon.hp > 0;
            this.challenger.pokemon = pokemon;
            await this.challengerStatus();
            this.pokemonPanel = false;
            if (attack) {
                setTimeout(() => {
                    this.oponentAttack();
                    if (this.challenger.pokemon.hp <= 0) {
                        this.challengerDead();
                    }
                }, 500);
            }
            setTimeout(() => this.attacking = false, 1000);
        }
    }

    attack(move, panel) {
        if (!this.attacking) {
            this.attacking = true;
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
            setTimeout(() => this.attacking = false, 2000);
        }
    }

    challengerDead() {
        const vivos: any = this.challenger.team.filter( p => p.hp > 0);
        if (vivos.length > 0) {
            this.pokemonPanel = true;
        } else {
            this.leave();
            this.msg.add({severity: 'error', summary: 'Failed', detail: 'Seus Pokemons morreram'});
        }
    }

    async oponentDead() {
        this.blockService.activeBlock();
        this.exp += await this.pokemonService.receiveExp(this.inBattle, this.oponent.pokemon.level);
        this.treinador.getMoney(50);
        this.inBattle = [this.challenger.pokemon];
        if (this.oponent.team && this.oponent.team.length > 0) {
            this.oponent.team = this.oponent.team.filter( p => p.hp > 0);
            if (this.oponent.team.length > 0) {
                this.oponent.pokemon = this.oponent.team[0];
                this.oponentStatusToGym(this.treinador.level, this.treinador.level > this.gym.treinador.level);
            } else {
                if (this.gym) {
                    this.msg.add({severity: 'success', summary: 'Winner', detail: 'Parabéns você venceu ' + this.gym.treinador.nick});
                    this.treinador.setBadge(this.gym.badge);
                }
                this.leave();
            }
        } else {
            this.msg.add({severity: 'success', summary: 'Winner', detail: '+ ' + this.exp + ' exp'});
            this.leave();
        }
        this.blockService.unBlock();
    }

    canAttackCheckEffects(pokemon) {
        if (pokemon.paralized && 75 < ((Math.random() * 100) + 1)) {
            this.msg.add({severity: 'info', summary: pokemon.pokemon.name + ' está paralizado, não pode atacar!'});
            return false;
        }

        if (pokemon.freezed && 80 <= ((Math.random() * 100) + 1) && pokemon.effectSteps < 3) {
            this.msg.add({severity: 'info', summary: pokemon.pokemon.name + ' está congelado, não pode atacar!'});
            pokemon.effectSteps++;
            return false;
        } else {
            if (pokemon.freezed) pokemon.effectSteps = 0;
            pokemon.affected = false;
            pokemon.freezed = false;
        }

        if (pokemon.sleeping && 80 <= ((Math.random() * 100) + 1) && pokemon.effectSteps < 3) {
            this.msg.add({severity: 'info', summary: pokemon.pokemon.name + ' está dormindo, não pode atacar!'});
            pokemon.effectSteps++;
            return false;
        } else {
            if (pokemon.sleeping) pokemon.effectSteps = 0;
            pokemon.affected = false;
            pokemon.sleeping = false;
        }
        return true;
    }

    effectsDownHpAfterAttack(pokemon) {
        if (pokemon.poisoned || pokemon.burned) {
            if ((pokemon.hp - Math.round(pokemon.maxHp * 0.1)) <= 0) {
                pokemon.hp = 0;
            } else {
                pokemon.hp -= Math.round(pokemon.maxHp * 0.1);
            }
        }
    }

    moveEffects(move, challenger) {
        let pokemonTarget;
        let pokemonSource;
        if (challenger) {
            pokemonTarget = this.oponent.pokemon;
            pokemonSource = this.challenger.pokemon;
        } else {
            pokemonTarget = this.challenger.pokemon;
            pokemonSource = this.oponent.pokemon;
        }
        if (move.heal > 0) {
            pokemonSource.hp += Math.round((move.heal * pokemonSource.maxHp) / 100);
            if (pokemonSource.hp > pokemonSource.maxHp) pokemonSource.hp = pokemonSource.maxHp;
        }
        if (move.paralize && !pokemonTarget.affected) {
            pokemonTarget.paralized = true;
            pokemonTarget.affected = true;
            pokemonTarget.effectSteps = 0;
        }
        if (move.poison && !pokemonTarget.affected) {
            const n = ((Math.random() * 100) + 1);
            if (n < 50) {
                pokemonTarget.poisoned = true;
                pokemonTarget.affected = true;
                pokemonTarget.effectSteps = 0;
            }
        }
        if (move.freeze && !pokemonTarget.affected) {
            const n = ((Math.random() * 100) + 1);
            if (n < 20) {
                pokemonTarget.freezed = true;
                pokemonTarget.affected = true;
                pokemonTarget.effectSteps = 0;
            }
        }
        if (move.sleep && !pokemonTarget.affected) {
            pokemonTarget.sleeping = true;
            pokemonTarget.affected = true;
            pokemonTarget.effectSteps = 0;
        }
        if (move.burn && !pokemonTarget.affected) {
            const n = ((Math.random() * 100) + 1);
            if (n < 10) {
                pokemonTarget.burned = true;
                pokemonTarget.affected = true;
                pokemonTarget.effectSteps = 0;
            }
        }
    }

    challengerAttack(move) {

        if (!this.canAttackCheckEffects(this.challenger.pokemon)) return;

        if (move.accuracy > ((Math.random() * 100) + 1)) {
            let damage = (this.challenger.pokemon.attack * (move.power / 100));
            damage = damage - (damage * (this.oponent.pokemon.defense / 300));
            damage = Math.round(damage * this.battleService.elementalAdvantage(move, this.oponent.pokemon.pokemon.types));
            if ((this.oponent.pokemon.hp - Math.round(damage)) < 0) {
                this.oponent.pokemon.hp = 0;
            } else {
                this.oponent.pokemon.hp -= Math.round(damage);
            }
            this.moveEffects(move, true);
        } else {
            this.msg.add({severity: 'info', summary: 'Seu ataque falhou!'});
        }

        this.effectsDownHpAfterAttack(this.challenger.pokemon);

    }
    oponentAttack() {

        if (!this.canAttackCheckEffects(this.oponent.pokemon)) return;

        let countMoves = 1;

        if(this.oponent.pokemon.move2) countMoves++;
        if(this.oponent.pokemon.move3) countMoves++;
        if(this.oponent.pokemon.move4) countMoves++;

        const nofAttack = Math.round(Math.random() * (countMoves - 1) + (1));
        let moveToAttack;
        if (nofAttack === 1) moveToAttack = this.oponent.pokemon.move1;
        if (nofAttack === 2) moveToAttack = this.oponent.pokemon.move2;
        if (nofAttack === 3) moveToAttack = this.oponent.pokemon.move3;
        if (nofAttack >= 4) moveToAttack = this.oponent.pokemon.move4;

        if (moveToAttack.accuracy > ((Math.random() * 100) + 1)) {
            this.msg.add({severity: 'info', summary: this.oponent.pokemon.pokemon.name, detail: 'used ' + moveToAttack.name});
            let damage = (this.oponent.pokemon.attack * (moveToAttack.power / 100));
            damage = damage - (damage * (this.challenger.pokemon.defense / 300));
            damage = Math.round(damage * this.battleService.elementalAdvantage(moveToAttack, this.challenger.pokemon.pokemon.types));
            if ((this.challenger.pokemon.hp - Math.round(damage)) < 0) {
                this.challenger.pokemon.hp = 0;
            } else {
                this.challenger.pokemon.hp -= Math.round(damage);
            }
            this.moveEffects(moveToAttack, false);
            // if (moveToAttack.heal > 0) {
            //     this.oponent.pokemon.hp += Math.round((moveToAttack.heal * this.oponent.pokemon.maxHp) / 100);
            //     if (this.oponent.pokemon.hp > this.oponent.pokemon.maxHp) this.oponent.pokemon.hp = this.oponent.pokemon.maxHp;
            // }
        } else {
            this.msg.add({severity: 'info', summary: 'O ataque do oponente falhou!'});
        }

        this.effectsDownHpAfterAttack(this.oponent.pokemon);
    }

    challengerStatus() {
        if (!this.challenger.pokemon.maxHp || this.challenger.pokemon.hp > this.challenger.pokemon.maxHp) {
            this.challenger.pokemon.maxHp = this.challenger.pokemon.hp;
        }
    }
    oponentStatus(level) {
        level = Math.round(Math.random() * (level - 1) + 1);
        // Math.random() * (max - min) + min;
        this.oponent.pokemon.level = level;
        this.oponent.pokemon = this.pokemonService.calcStatus(level, this.oponent.pokemon);
        this.oponent.pokemon.maxHp = this.oponent.pokemon.hp;
    }
    oponentStatusToGym(level, changeLevel = false) {
        if (changeLevel) {
            const min = level - 2;
            const max = level + 3;
            level = Math.round(Math.random() * (max - min) + min);
            // Math.random() * (max - min) + min;
            this.oponent.pokemon.level = level;
            this.oponent.pokemon = this.pokemonService.calcStatus(level, this.oponent.pokemon);
            this.oponent.pokemon.maxHp = this.oponent.pokemon.hp;
        } else {
            if (!this.oponent.pokemon.maxHp || this.oponent.pokemon.hp > this.oponent.pokemon.maxHp) {
                this.oponent.pokemon.maxHp = this.oponent.pokemon.hp;
            }
        }
    }
    heal(item) {
        if (!this.attacking) {
            this.attacking = true;
            this.treinador.useItem(item);
            this.challenger.pokemon.hp += item.item.effect;
            if (this.challenger.pokemon.hp > this.challenger.pokemon.maxHp) this.challenger.pokemon.hp = this.challenger.pokemon.maxHp;
            this.itemsPanel = false;
            setTimeout(() => {
                this.oponentAttack();
                if (this.challenger.pokemon.hp <= 0) {
                    this.challengerDead();
                }
                setTimeout(() => this.attacking = false, 1000);
            }, 1500);
        }
    }

    catchPokemon(item) {
        if (!this.gym) {
            if (!this.attacking) {
                this.attacking = true;
                this.treinador.useItem(item);
                const hpChance = Math.round((((100 - ((this.oponent.pokemon.hp / this.oponent.pokemon.maxHp) * 100)) / 4) + 1) * item.item.effect);
                const levelChance = Math.round(((100 - this.oponent.pokemon.level) / 2));
                const chance = hpChance + levelChance;
                const random = Math.round(Math.random() * (100 - 1) + (1));
                if (chance >= random) {
                    this.treinador.catched(this.oponent.pokemon);
                    this.leave();
                } else {
                    setTimeout(() => {
                        this.oponentAttack();
                        if (this.challenger.pokemon.hp <= 0) {
                            this.challengerDead();
                        }
                    }, 1000);
                }
                this.itemsPanel = false;
                setTimeout(() => this.attacking = false, 1000);
            }
        } else {
            this.msg.add({severity: 'warn', summary: 'Ops...', detail: 'Você não pode capturar esse pokemon!'});
        }
    }

    leave() {
        this.gym = null;
        this.oponent = {};
        this.battlePanel = false;
        this.audio.home();
    }
    getPokeballs() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'standard-balls');
    }
    getPotions() {
        return this.treinador.items.filter((i) => i.amount > 0 && i.item.category.name === 'healing');
    }
}
