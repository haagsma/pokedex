import {Injectable} from "@angular/core";


@Injectable()
export class BattleService {

    types: any;

    constructor() {}

    elementalAdvantage(move, types) {
        this.types = types;
        switch (move.type.name) {
            case 'normal':
                return this.normal();
            case 'fire':
                return this.fire();
            case 'water':
                return this.water();
            case 'grass':
                return this.grass();
            case 'eletric':
                return this.eletric();
            case 'ice':
                return this.ice();
            case 'fighting':
                return this.fighting();
            case 'poison':
                return this.poison();
            case 'ground':
                return this.ground();
            case 'flying':
                return this.flying();
            case 'psychic':
                return this.psychic();
            case 'bug':
                return this.bug();
            case 'rock':
                return this.rock();
            case 'ghost':
                return this.ghost();
            case 'dragon':
                return this.dragon();
            case 'dark':
                return this.dark();
            case 'steel':
                return this.steel();
            case 'fairy':
                return this.fairy();
            default:
                return 1;
        }
    }

    contain(name, types) {
        const array = types.filter(t => t.type.name === name);
        return array.length > 0;
    }

    // null 1
    // 2 1
    // 1 2
    calcAdvantage(control, advantage) {
        control *= advantage;
    }

    fairy() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 2);
        }
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 2);
        }
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 2);
        }
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }

        return control;
    }
    steel() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 2);
        }
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 2);
        }
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        }
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 2);
        }
        return control;
    }
    dark() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        return control;
    }
    dragon() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 0);
        }

        return control;
    }
    ghost() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 0);
        } 
         if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 2);
        } 
         if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 2);
        } 
         if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
         if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 1);
        } 
         if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    rock() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    bug() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        return control;
    }
    psychic() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 0);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    flying() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    ground() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 0);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    poison() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 2);
        }
        return control;
    }
    fighting() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 0);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 0.5);
        }
        return control;
    }
    ice() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    eletric() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 0);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    grass() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    water() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    fire() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 2);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }
    normal() {
        let control = 1;
        if (this.contain('normal', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fire', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('water', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('grass', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('eletric', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ice', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('fighting', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('poison', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('ground', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('flying', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('psychic', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('bug', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('rock', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('ghost', this.types)) {
            this.calcAdvantage(control, 0);
        } 
        if (this.contain('dragon', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('dark', this.types)) {
            this.calcAdvantage(control, 1);
        } 
        if (this.contain('steel', this.types)) {
            this.calcAdvantage(control, 0.5);
        } 
        if (this.contain('fairy', this.types)) {
            this.calcAdvantage(control, 1);
        }
        return control;
    }

}
