import {Component} from '@angular/core';
import {TreinadorService} from '../../service/treinadorService';


@Component({
    selector: 'panel-treinador',
    templateUrl: './panel-treinador.component.html',
    styleUrls: ['./panel-treinador.component.css']
})
export class PanelTreinadorComponent {

    constructor(public treinador: TreinadorService) {}

    styleExpBar = {
      height: '6px',
      width: '80px'
    };
    level() {
        return Math.round((this.treinador.exp*100)/(100*Math.pow(1.1, this.treinador.level)));
    }

}