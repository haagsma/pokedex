import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {MapaService} from "./service/mapaService";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {UserService} from './service/userService';
import {TreinadorService} from './service/treinadorService';
import {HttpService} from './service/httpService';
import {ShopService} from './service/shopService';
import {ActiveGuard} from './guard/active.guard';
import {BattleService} from './service/battleService';
import {MessageService} from 'primeng/api';
import {PokemonService} from './service/pokemonService';


export const APP_PROVIDERS = [
    StatusBar,
    SplashScreen,
    MapaService,
    Geolocation,
    UserService,
    TreinadorService,
    HttpService,
    ShopService,
    ActiveGuard,
    BattleService,
    MessageService,
    PokemonService
];
