import {Component} from '@angular/core';


@Component({
    selector: 'battle-component',
    templateUrl: './battle.component.html',
    styleUrls: ['./battle.component.css']
})
export class BattleComponent {

    battlePanel = false;


    startBattle() {
        this.battlePanel = true;
    }

}