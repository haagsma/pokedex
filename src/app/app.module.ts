import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';

import {IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_MODULES} from "./app.modules-imports";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: APP_MODULES,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
