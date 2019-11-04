import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare const google;

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {
  map;
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.map1();
  }

  map1() {
    if(google) {

        const mapOptions = {
            zoom: 15,
            center: {lat: -23.4856363, lng: -46.7659253},
            disableDefaultUI: true,
            styles: [{
                featureType: "poi",
                stylers: [
                    { visibility: "off" }
                ]
            }]
        };
        var infowindow = new google.maps.InfoWindow();
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        let marker = new google.maps.Marker({id: 1,position: {lat: -23.4856363, lng: -46.7659253}, map: this.map, icon: '/assets/pokemons/004.png'});
        marker.set('pokemon', 1);
        // marker.addListener('click', (e, e1 = marker) => console.log(e1.get('pokemon')));
        let i;
        google.maps.event.addListener(marker, 'click', ( (marker, i = 1) => {
            return () => {
                console.log(marker.get('pokemon'))
            }
        })(marker, i));
        marker = new google.maps.Marker({id: 2, position: {lat: -23.4846363, lng: -46.7659253}, map: this.map, icon: '/assets/pokemons/007.png'});
        marker.set('pokemon', 2);
        google.maps.event.addListener(marker, 'click', ( (marker, i = 2) => {
            return () => {
                console.log(marker.get('pokemon'))
            }
        })(marker, i));
        // marker.addListener('click', (e, e1 = marker) => console.log(e1.get('pokemon')));
    } else {
      this.map1();
    }

  }


}
