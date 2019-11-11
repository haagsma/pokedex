import {Injectable} from "@angular/core";


@Injectable()
export class TreinadorService {

    nick: string;
    level;
    exp;
    status: any;
    team: any[];
    pokemons: any[];
    items;
    amount;
    logged = false;

    constructor() {}

}
