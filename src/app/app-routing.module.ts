import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {HomePage} from './pages/home/home.page';
import {CadastroUserPage} from './pages/login/cadastro/cadastro-user.page';
import {CadastroTreinadorPage} from './pages/cadastro-treinador/cadastro-treinador.page';
import {PokemonInicialPage} from './pages/cadastro-treinador/pokemon-inicial/pokemon-inicial.page';
import {ActiveGuard} from './guard/active.guard';
import {CadastroGuard} from './guard/cadastro.guard';
import {TestePage} from "./pages/teste/teste.page";



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginPage},
    {path: 'teste', component: TestePage},
    {path: 'home', component: HomePage, canActivate: [ActiveGuard]},
    {path: 'login/cadastro', component: CadastroUserPage},
    {path: 'cadastro-treinador', component: CadastroTreinadorPage, canActivate: [CadastroGuard]},
    {path: 'pokemon-inicial', component: PokemonInicialPage, canActivate: [CadastroGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
