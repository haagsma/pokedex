import {Injectable} from "@angular/core";

@Injectable()
export class AudioService {

    private audio: any;

    async startAudioService() {
        this.audio = await document.createElement('video');
        this.audio.loop = true;
        this.startLogin();
    }
    startLogin() {
        this.audio.src = '/assets/mp3/login.mp3';
        this.audio.play();
    }
    home() {
        this.audio.pause();
        this.audio.src = '/assets/mp3/settingoff.mp3';
        this.audio.play();
    }
    wildBattle() {
        this.audio.pause();
        this.audio.src = '/assets/mp3/wildpokemon.mp3';
        this.audio.play();
    }
    gym() {
        this.audio.pause();
        this.audio.src = '/assets/mp3/gym.mp3';
        this.audio.play();
    }

}
