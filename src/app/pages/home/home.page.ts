import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MapaService} from "../../service/mapaService";
import {HttpService} from '../../service/httpService';
import {PokedexViewComponent} from '../../components/poke/pokedex-component';
import {BagComponent} from '../../components/bag/bag.component';
import {PokeballComponent} from '../../components/pokeball/pokeball.component';
import {BattleComponent} from '../../components/battle/battle.component';
import {ShopComponent} from '../../components/shop/shop.component';
import {ChangePowerComponent} from '../../components/change-power/change-power.component';
import {PokemonService} from '../../service/pokemonService';
import {AudioService} from '../../service/audioService';
import {SocketService} from "../../service/socketService";
import {ChatGlobalComponent} from "../../components/chat/chat-global.component";

declare const google: any;

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {

  @ViewChild(PokedexViewComponent , null) pokedex: PokedexViewComponent;
  @ViewChild(BagComponent , null) bag: BagComponent;
  @ViewChild(PokeballComponent , null) pokeball: PokeballComponent;
  @ViewChild(BattleComponent , null) battle: BattleComponent;
  @ViewChild(ShopComponent , null) shop: ShopComponent;
  @ViewChild(ChangePowerComponent , null) powerPanel: ChangePowerComponent;
  @ViewChild(ChatGlobalComponent , null) chatPanel: ChatGlobalComponent;

  constructor(private router: Router,
              public mapaService: MapaService,
              private http: HttpService,
              public pokemon: PokemonService,
              private audio: AudioService) {}

  ngOnInit() {
   this.audio.home();
   this.mapaService.showMap(this.battle);
   this.pokemon.changePowerPanel = this.powerPanel;
  }

}
