import {BrowserModule} from "@angular/platform-browser";
import {IonicModule} from "@ionic/angular";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule, InputTextModule} from "primeng/primeng";

export const APP_MODULES = [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    CardModule
];
