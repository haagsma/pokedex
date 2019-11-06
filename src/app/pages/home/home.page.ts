import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MapaService} from "../../service/mapaService";

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private mapaService: MapaService) {}

  ngOnInit() {
   this.mapaService.showMap();
  }



}
