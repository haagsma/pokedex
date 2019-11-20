import {Injectable, ViewChild} from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {HttpService} from './httpService';
import {getRandomString} from 'selenium-webdriver/safari';

declare const google: any;
declare const Math: any;


@Injectable()
export class MapaService {

    map: any;
    trainer: any;
    battle: any;
    pokemonMarkers = [];

    interval: any;
    inCenter = true;
    currentPosition: any;
    geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    constructor(private geolocation: Geolocation, private http: HttpService) {}

    async showMap(battle) {
        try {
            this.battle = battle;

            this.currentPosition = await this.geolocation.getCurrentPosition(this.geolocationOptions);

            const mapOptions = {
                zoom: 16,
                center: {lat: this.currentPosition.coords.latitude, lng: this.currentPosition.coords.longitude},
                // zoomControl: false,
                // scaleControl: false,
                // scrollwheel: false,
                disableDefaultUI: true,
                styles: [
                    {
                        featureType: "poi",
                        stylers: [
                            { visibility: "off" }
                        ]
                    },
                    {elementType: 'geometry', stylers: [{color: '#88DA87'}]},
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [{color: '#CFECEB'}]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{color: '#00ffff'}]
                    },
                ]
            };
            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            this.map.addListener('center_changed', () => {
                this.inCenter = false;
            });
            const icon = {
                url: '/assets/avatars/ash.png', // url
                scaledSize: new google.maps.Size(60, 70), // scaled size
            };
            this.trainer = new google.maps.Marker({id: 1, position: {lat: (this.currentPosition.coords.latitude), lng: this.currentPosition.coords.longitude}, map: this.map, icon: icon});
            this.getPokemonsToMap();
        } catch (e) {
            this.showMap(battle);
        }
    }

    getPokemonsToMap(): void {
        this.http.get('/mapa').subscribe((res: any) => {
           const count = res.length;
           for (let i = 0; i < count; i++) {
                this.generatePokemonInMap(res[i]);
           }
        }, (err) => {
            this.getPokemonsToMap();
        });
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(() => {
            this.http.get('/mapa').subscribe((res: any) => {
                this.cleanPokemonsMarkers();
                const count = res.length;
                for (let i = 0; i < count; i++) {
                    this.generatePokemonInMap(res[i]);
                }
            }, (err) => {});
        }, 120000);
    }
    cleanPokemonsMarkers() {
        for (let i in this.pokemonMarkers) {
            this.pokemonMarkers[i].setMap(null);
        }
        this.pokemonMarkers = [];
    }
    generatePokemonInMap(pmarker: any) {
        const icon = {
            url: '/assets/pokemons/' + pmarker.pokemon.num + '.png', // url
            scaledSize: new google.maps.Size(70, 70), // scaled size
        };
        const marker = new google.maps.Marker({id: 1, position: this.getRandomNearLocal(), map: this.map, icon: icon});
        marker.set('pokemon', pmarker);
        this.pokemonMarkers.push(marker);
        // console.log(this.pokemonMarkers)
        let i;
        google.maps.event.addListener(marker, 'click', ( (marker, i = 1) => {
            return () => {
                this.battle.startBattle(marker.get('pokemon'));
                marker.setMap(null);
                // console.log(marker.get('pokemon'));
            }
        })(marker, i));
    }
    getRandomNearLocal() {
        const lat = Math.random() * ((this.currentPosition.coords.latitude + 0.02) - (this.currentPosition.coords.latitude - 0.02)) + (this.currentPosition.coords.latitude - 0.02);
        const lng = Math.random() * ((this.currentPosition.coords.longitude + 0.02) - (this.currentPosition.coords.longitude - 0.02)) + (this.currentPosition.coords.longitude - 0.02);
        return {lat, lng};
    }
    async goCenter() {
        this.currentPosition = await this.geolocation.getCurrentPosition(this.geolocationOptions);
        const latlng = new google.maps.LatLng(this.currentPosition.coords.latitude, this.currentPosition.coords.longitude);
        this.trainer.setPosition(latlng);
        this.map.panTo(this.trainer.getPosition());
        this.inCenter = true;
    }

}
