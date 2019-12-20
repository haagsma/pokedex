import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';
import {TreinadorService} from "./treinadorService";

@Injectable()
export class SocketService {

    url = 'http://localhost:8080/websocket';
    chat = '/chat/global';
    stompClient: any;
    messages = [];

    constructor(private treinador: TreinadorService) {
    }

    connect() {
        const websocket = new SockJs(this.url);
        this.stompClient = Stomp.over(websocket);
        this.stompClient.connect({}, (frame) => {
            this.stompClient.subscribe(this.chat, (event) => {
                this.messages.push(JSON.parse(event.body));
            });
        }, (e) => {
            setTimeout(() => this.connect(), 5000);
            console.log('Erro ao conectar:', e);
        });
    }

    sendMessage(msg) {
        console.log('Enviando mensagem');
        this.stompClient.send('/send/global', {}, JSON.stringify({sender: this.treinador.nick, message: msg}));
    }
}