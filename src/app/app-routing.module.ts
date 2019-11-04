import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPage} from './login/login.page';
import {HomePage} from './home/home.page';
import {CadastroUserPage} from './login/cadastro/cadastro-user.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginPage},
    {path: 'home', component: HomePage},
    {path: 'login/cadastro', component: CadastroUserPage},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
