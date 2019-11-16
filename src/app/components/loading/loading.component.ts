import {Component} from '@angular/core';
import {BlockService} from '../../service/blockService';


@Component({
    selector: 'loading-block',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

    constructor(public block: BlockService) {}

}