import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import {environment} from "../environments/environment";
import { AddPacienteComponent } from './pacientes/components/add-paciente/add-paciente.component';
import { PacienteDetailsComponent } from './pacientes/components/paciente-details/paciente-details.component';
import { PacientesListComponent } from './pacientes/components/pacientes-list/pacientes-list.component';
import { ChatModule } from "./contato/chat/chat.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgendamentoComponent,
    ContatoComponent,
    SobreComponent,
    LocalizacaoComponent,
    CadastroComponent,
    LoginComponent,
    AddPacienteComponent,
    PacienteDetailsComponent,
    PacientesListComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
