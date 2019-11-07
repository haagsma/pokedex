import {Component} from '@angular/core';


@Component({
    selector: 'shop-component',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {

    shop = false;

    open() {
        this.shop = true;
    }
}