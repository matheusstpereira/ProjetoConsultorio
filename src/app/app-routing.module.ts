import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContatoComponent} from "./contato/contato.component";
import {AgendamentoComponent} from "./agendamento/agendamento.component";
import {SobreComponent} from "./sobre/sobre.component";
import {LocalizacaoComponent} from "./localizacao/localizacao.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'agendamento', component: AgendamentoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'localizacao', component: LocalizacaoComponent},
  {path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
