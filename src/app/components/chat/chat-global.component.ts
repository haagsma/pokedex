import {Component, OnInit} from "@angular/core";
import {TreinadorService} from "../../service/treinadorService";
import {SocketService} from "../../service/socketService";


@Component({
    selector: 'chat-global',
    templateUrl: './chat-global.component.html',
    styleUrls: ['./chat-global.component.css']
})
export class ChatGlobalComponent implements OnInit{

    chatPanel: boolean;
    message: string;

    constructor(public treinador: TreinadorService, private socket: SocketService) {
    }

    ngOnInit(): void {
        this.socket.connect();
    }

    open() {
        this.chatPanel = true;
    }

    send() {
        if (this.message) {
            this.socket.sendMessage(this.message);
            this.message = null;
        }
    }
}