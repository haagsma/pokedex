import {Component} from '@angular/core';
import {ShopService} from '../../service/shopService';
import {HttpService} from '../../service/httpService';
import {TreinadorService} from '../../service/treinadorService';
import {MessageService} from 'primeng/api';
import {BlockService} from '../../service/blockService';


@Component({
    selector: 'shop-component',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {

    shop = false;

    constructor(private shopService: ShopService,
                private http: HttpService,
                private treinador: TreinadorService,
                private msg: MessageService,
                private block: BlockService) {}

    async open() {
        this.shop = true;
        this.shopService.items = await this.http.get('/shop/all').toPromise();
    }

    getPokeballs() {
        return this.shopService.items.filter((i) => i.item.category.name === 'standard-balls');
    }
    getPotions() {
        return this.shopService.items.filter((i) => i.item.category.name === 'healing');
    }
    getTms() {
        return this.shopService.items.filter((i) => i.item.category.name === 'all-machines');
    }

    comprar(item) {
        this.block.activeBlock();
        if (this.treinador.amount - item.price >= 0) {
            this.http.post('/treinador/getmoney', {id: this.treinador.id, money: -(item.price)}).subscribe(async (res: any) => {
                this.treinador.amount -= item.price;
                const verify = this.treinador.items.filter((i) => i.item.id === item.item.id);
                if (verify.length > 0) {
                    this.treinador.items = this.treinador.items.map((i) => {
                        if (i.item.id === item.item.id) {
                            try {
                                i.amount++;
                                const res = this.http.post('/treinador/useitem', i).toPromise();
                                this.block.unBlock();
                                this.msg.add({severity: 'success', summary: 'Sucesso', detail: 'Item comprado, verifique sua Bag!'});
                            } catch (e) {
                                console.log(e);
                                this.noMoney();
                            }
                        }
                        return i;
                    });
                } else {
                    try {
                        item.treinador = {id: this.treinador.id};
                        item.amount = 1;
                        const newItem: any = await this.http.post('/treinador/useitem', item).toPromise();
                        this.treinador.items.push(newItem);
                        this.block.unBlock();
                        this.msg.add({severity: 'success', summary: 'Sucesso', detail: 'Item comprado, verifique sua Bag!'});
                    } catch (e) {
                        console.log(e);
                        this.noMoney();
                    }
                }
            }, e => {
                console.log(e);
                this.noMoney();
            });
        } else {
            this.noMoney();
        }
    }

    noMoney() {
        this.block.unBlock();
        this.msg.add({severity: 'error', summary: 'Failed', detail: 'Não foi possível comprar o item!'});
    }
}