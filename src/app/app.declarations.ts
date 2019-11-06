import {HomePage} from './pages/home/home.page';
import {AppComponent} from './app.component';
import {LoginPage} from './pages/login/login.page';
import {CadastroUserPage} from './pages/login/cadastro/cadastro-user.page';
import {PanelTreinadorComponent} from './components/panel-treinador/panel-treinador.component';
import {CadastroTreinadorPage} from './pages/cadastro-treinador/cadastro-treinador.page';
import {PokemonInicialPage} from './pages/cadastro-treinador/pokemon-inicial/pokemon-inicial.page';


export const APP_DECLARATIONS = [
    AppComponent,
    LoginPage,
    CadastroUserPage,
    HomePage,
    PanelTreinadorComponent,
    CadastroTreinadorPage,
    PokemonInicialPage
];