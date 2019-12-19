import {Component, Input} from '@angular/core';

@Component({
    selector: 'btn-ataque',
    templateUrl: './btn-ataque.component.html',
    styleUrls: ['./btn-ataque.component.css']
})
export class BtnAtaqueComponent {

    @Input() move: any  = {type: {name: ''}};

    replace(data) {
        if (data) return data.replace('-', ' ');
        return null;
    }
}