import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';
import {TreinadorService} from "./treinadorService";

@Injectable()
export class SocketService {

    // url = 'http://localhost:8080/websocket';
    url = 'http://haagsma.com.br:8080/websocket';
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
                setTimeout(() => {
                    document.getElementsByClassName('chat-container')[0].scrollTop = 999999999;
                }, 500);
            });
        }, (e) => {
            setTimeout(() => this.connect(), 5000);
            console.log('Erro ao conectar:', e);
        });
    }

    sendMessage(msg) {
        this.stompClient.send('/send/global', {}, JSON.stringify({sender: this.treinador.nick, message: msg, avatar: this.treinador.avatar, treinador: this.treinador.id}));
    }
}