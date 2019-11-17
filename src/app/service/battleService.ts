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
    fairy() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 0.5;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 2;
        } else if (this.contain('poison', this.types)) {
            return 0.5;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 2;
        } else if (this.contain('dark', this.types)) {
            return 2;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    steel() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 0.5;
        } else if (this.contain('water', this.types)) {
            return 0.5;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 0.5;
        } else if (this.contain('ice', this.types)) {
            return 2;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 2;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 2;
        } else {
            return 1;
        }
    }
    dark() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 0.5;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 2;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 2;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 0.5;
        } else if (this.contain('steel', this.types)) {
            return 1;
        } else if (this.contain('fairy', this.types)) {
            return 0.5;
        } else {
            return 1;
        }
    }
    dragon() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 2;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 0;
        } else {
            return 1;
        }
    }
    ghost() {
        if (this.contain('normal', this.types)) {
            return 0;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 2;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 2;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 0.5;
        } else if (this.contain('steel', this.types)) {
            return 1;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    rock() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 2;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 2;
        } else if (this.contain('fighting', this.types)) {
            return 0.5;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 0.5;
        } else if (this.contain('flying', this.types)) {
            return 2;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 2;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    bug() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 0.5;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 2;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 0.5;
        } else if (this.contain('poison', this.types)) {
            return 0.5;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 0.5;
        } else if (this.contain('psychic', this.types)) {
            return 2;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 0.5;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 2;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 0.5;
        } else {
            return 1;
        }
    }
    psychic() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 2;
        } else if (this.contain('poison', this.types)) {
            return 2;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 0.5;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 0;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    flying() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 2;
        } else if (this.contain('eletric', this.types)) {
            return 0.5;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 2;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 2;
        } else if (this.contain('rock', this.types)) {
            return 0.5;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    // ground() {
    //     if (this.contain('normal', this.types)) {
    //         return 1;
    //     } else if (this.contain('fire', this.types)) {
    //         return 2;
    //     } else if (this.contain('water', this.types)) {
    //         return 1;
    //     } else if (this.contain('grass', this.types)) {
    //         return 0.5;
    //     } else if (this.contain('eletric', this.types)) {
    //         return 2;
    //     } else if (this.contain('ice', this.types)) {
    //         return 1;
    //     } else if (this.contain('fighting', this.types)) {
    //         return 1;
    //     } else if (this.contain('poison', this.types)) {
    //         return 2;
    //     } else if (this.contain('ground', this.types)) {
    //         return 1;
    //     } else if (this.contain('flying', this.types)) {
    //         return 0;
    //     } else if (this.contain('psychic', this.types)) {
    //         return 1;
    //     } else if (this.contain('bug', this.types)) {
    //         return 0.5;
    //     } else if (this.contain('rock', this.types)) {
    //         return 2;
    //     } else if (this.contain('ghost', this.types)) {
    //         return 1;
    //     } else if (this.contain('dragon', this.types)) {
    //         return 1;
    //     } else if (this.contain('dark', this.types)) {
    //         return 1;
    //     } else if (this.contain('steel', this.types)) {
    //         return 2;
    //     } else if (this.contain('fairy', this.types)) {
    //         return 1;
    //     } else {
    //         return 1;
    //     }
    // }
    ground() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 2;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 0.5;
        } else if (this.contain('eletric', this.types)) {
            return 2;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 2;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 0;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 0.5;
        } else if (this.contain('rock', this.types)) {
            return 2;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 2;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    poison() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 2;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 0.5;
        } else if (this.contain('ground', this.types)) {
            return 0.5;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 0.5;
        } else if (this.contain('ghost', this.types)) {
            return 0.5;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0;
        } else if (this.contain('fairy', this.types)) {
            return 2;
        } else {
            return 1;
        }
    }
    fighting() {
        if (this.contain('normal', this.types)) {
            return 2;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 2;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 0.5;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 0.5;
        } else if (this.contain('psychic', this.types)) {
            return 0.5;
        } else if (this.contain('bug', this.types)) {
            return 0.5;
        } else if (this.contain('rock', this.types)) {
            return 2;
        } else if (this.contain('ghost', this.types)) {
            return 0;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 2;
        } else if (this.contain('fairy', this.types)) {
            return 0.5;
        } else {
            return 1;
        }
    }
    ice() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 0.5;
        } else if (this.contain('water', this.types)) {
            return 0.5;
        } else if (this.contain('grass', this.types)) {
            return 2;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 0.5;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 2;
        } else if (this.contain('flying', this.types)) {
            return 2;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 2;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    eletric() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 2;
        } else if (this.contain('grass', this.types)) {
            return 0.5;
        } else if (this.contain('eletric', this.types)) {
            return 0.5;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 0;
        } else if (this.contain('flying', this.types)) {
            return 2;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 1;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 0.5;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 1;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    grass() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 0.5;
        } else if (this.contain('water', this.types)) {
            return 2;
        } else if (this.contain('grass', this.types)) {
            return 0.5;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 0.5;
        } else if (this.contain('ground', this.types)) {
            return 2;
        } else if (this.contain('flying', this.types)) {
            return 0.5;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 0.5;
        } else if (this.contain('rock', this.types)) {
            return 2;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 0.5;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    water() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 2;
        } else if (this.contain('water', this.types)) {
            return 0.5;
        } else if (this.contain('grass', this.types)) {
            return 0.5;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 2;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 2;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 0.5;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 1;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    fire() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 0.5;
        } else if (this.contain('water', this.types)) {
            return 0.5;
        } else if (this.contain('grass', this.types)) {
            return 2;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 2;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 2;
        } else if (this.contain('rock', this.types)) {
            return 0.5;
        } else if (this.contain('ghost', this.types)) {
            return 1;
        } else if (this.contain('dragon', this.types)) {
            return 0.5;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 2;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }
    normal() {
        if (this.contain('normal', this.types)) {
            return 1;
        } else if (this.contain('fire', this.types)) {
            return 1;
        } else if (this.contain('water', this.types)) {
            return 1;
        } else if (this.contain('grass', this.types)) {
            return 1;
        } else if (this.contain('eletric', this.types)) {
            return 1;
        } else if (this.contain('ice', this.types)) {
            return 1;
        } else if (this.contain('fighting', this.types)) {
            return 1;
        } else if (this.contain('poison', this.types)) {
            return 1;
        } else if (this.contain('ground', this.types)) {
            return 1;
        } else if (this.contain('flying', this.types)) {
            return 1;
        } else if (this.contain('psychic', this.types)) {
            return 1;
        } else if (this.contain('bug', this.types)) {
            return 1;
        } else if (this.contain('rock', this.types)) {
            return 0.5;
        } else if (this.contain('ghost', this.types)) {
            return 0;
        } else if (this.contain('dragon', this.types)) {
            return 1;
        } else if (this.contain('dark', this.types)) {
            return 1;
        } else if (this.contain('steel', this.types)) {
            return 0.5;
        } else if (this.contain('fairy', this.types)) {
            return 1;
        } else {
            return 1;
        }
    }

}
