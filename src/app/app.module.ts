import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginPage} from './login/login.page';
import {CadastroUserPage} from './login/cadastro/cadastro-user.page';
import {HomePage} from './home/home.page';
import {APP_MODULES} from './app.modules-imports';
import {APP_PROVIDERS} from "./app.providers";

@NgModule({
  declarations: [AppComponent, LoginPage, CadastroUserPage, HomePage],
  entryComponents: [],
  imports: APP_MODULES
  ,
  providers: APP_PROVIDERS,
  bootstrap: [AppComponent]
})
export class AppModule {}
