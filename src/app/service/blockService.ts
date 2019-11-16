import {Injectable} from "@angular/core";

@Injectable()
export class BlockService {

    public blocked = false;

    public activeBlock() {
        this.blocked = true;
    }

    public unBlock() {
        this.blocked = false;
    }

}
