import {NgModule} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {LoginPage} from './login/login.page';
import {CadastroUserPage} from './login/cadastro/cadastro-user.page';
import {HomePage} from './home/home.page';
import {APP_MODULES} from './app.modules-imports';

@NgModule({
  declarations: [AppComponent, LoginPage, CadastroUserPage, HomePage],
  entryComponents: [],
  imports: APP_MODULES
  ,
  providers: [
    StatusBar,
    SplashScreen,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
