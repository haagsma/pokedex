import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {HomePage} from './pages/home/home.page';
import {CadastroUserPage} from './pages/login/cadastro/cadastro-user.page';
import {CadastroTreinadorPage} from './pages/cadastro-treinador/cadastro-treinador.page';
import {PokemonInicialPage} from './pages/cadastro-treinador/pokemon-inicial/pokemon-inicial.page';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro-treinador', pathMatch: 'full' },
    {path: 'login', component: LoginPage},
    {path: 'home', component: HomePage},
    {path: 'login/cadastro', component: CadastroUserPage},
    {path: 'cadastro-treinador', component: CadastroTreinadorPage},
    {path: 'pokemon-inicial', component: PokemonInicialPage},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
