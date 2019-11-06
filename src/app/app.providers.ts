import {StatusBar} from "@ionic-native/status-bar/ngx";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {MapaService} from "./service/mapaService";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {UserService} from './service/userService';
import {TreinadorService} from './service/treinadorService';


export const APP_PROVIDERS = [
    StatusBar,
    SplashScreen,
    MapaService,
    Geolocation,
    UserService,
    TreinadorService
];
