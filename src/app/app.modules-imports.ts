import {BrowserModule} from "@angular/platform-browser";
import {IonicModule} from "@ionic/angular";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    BlockUIModule,
    CardModule, ConfirmDialogModule, DialogModule,
    InputTextModule, OverlayPanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    SidebarModule,
    TabViewModule
} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {JwtModule} from '@auth0/angular-jwt';

export const APP_MODULES = [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
    ScrollPanelModule,
    SidebarModule,
    HttpClientModule,
    ProgressSpinnerModule,
    TabViewModule,
    DialogModule,
    OverlayPanelModule,
    ToastModule,
    BlockUIModule,
    JwtModule.forRoot({
        config: {
            tokenGetter: () => localStorage.getItem('token')
        }
    }),
    ConfirmDialogModule
];
