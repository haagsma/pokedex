import { NgModule } from '@angular/core';
import {CanActivate, Router, RouterModule, Routes} from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {HomePage} from './pages/home/home.page';
import {CadastroUserPage} from './pages/login/cadastro/cadastro-user.page';
import {CadastroTreinadorPage} from './pages/cadastro-treinador/cadastro-treinador.page';
import {PokemonInicialPage} from './pages/cadastro-treinador/pokemon-inicial/pokemon-inicial.page';
import {TreinadorService} from './service/treinadorService';
import {ActiveGuard} from './guard/active.guard';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginPage},
    {path: 'home', component: HomePage, canActivate: [ActiveGuard]},
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
