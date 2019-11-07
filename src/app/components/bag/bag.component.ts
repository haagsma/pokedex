import {Component} from '@angular/core';


@Component({
    selector: 'bag-component',
    templateUrl: './bag.component.html',
    styleUrls: ['./bag.component.css']
})
export class BagComponent {
    bag = false;


    open() {
        this.bag = true;
    }
}