import {Injectable} from "@angular/core";
import {Geolocation} from "@ionic-native/geolocation/ngx";

declare const google: any;


@Injectable()
export class MapaService {

    map: any;
    trainer: any;

    currentPosition: any;
    geolocationOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    constructor(private geolocation: Geolocation) {}


    async showMap() {
        if (google) {
            try {
                this.currentPosition = await this.geolocation.getCurrentPosition(this.geolocationOptions);
            } catch (e) {
                this.currentPosition = await this.geolocation.getCurrentPosition(this.geolocationOptions);
            }
            const mapOptions = {
                zoom: 16,
                center: {lat: this.currentPosition.coords.latitude, lng: this.currentPosition.coords.longitude},
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
                ]
            };
            this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            const icon = {
                url: '/assets/avatars/ash.png', // url
                scaledSize: new google.maps.Size(60, 70), // scaled size
            };
            this.trainer = new google.maps.Marker({id: 1, position: {lat: (this.currentPosition.coords.latitude), lng: this.currentPosition.coords.longitude}, map: this.map, icon: icon});
            this.generatePokemonMarker();
        } else {
            this.showMap();
        }
    }

    async generatePokemonMarker() {
        let icon = {
            url: '/assets/pokemons/004.png', // url
            scaledSize: new google.maps.Size(70, 70), // scaled size
        };
        let marker = new google.maps.Marker({id: 1, position: {lat: (this.currentPosition.coords.latitude + 0.001), lng: this.currentPosition.coords.longitude}, map: this.map, icon: icon});
        marker.set('pokemon', 1);
        let i;
        google.maps.event.addListener(marker, 'click', ( (marker, i = 1) => {
            return () => {
                console.log(marker.get('pokemon'))
            }
        })(marker, i));
        icon = {
            url: '/assets/pokemons/007.png', // url
            scaledSize: new google.maps.Size(70, 70), // scaled size
        };
        marker = new google.maps.Marker({id: 2, position: {lat: (this.currentPosition.coords.latitude-0.001), lng: this.currentPosition.coords.longitude}, map: this.map, icon: icon});
        marker.set('pokemon', 2);
        google.maps.event.addListener(marker, 'click', ( (marker, i = 2) => {
            return () => {
                console.log(marker.get('pokemon'))
            }
        })(marker, i));
    }

}
