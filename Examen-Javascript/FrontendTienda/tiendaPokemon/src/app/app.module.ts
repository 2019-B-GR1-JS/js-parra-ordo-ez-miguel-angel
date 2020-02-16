import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {AuthService} from './Services/auth/auth.service';
import { PokemonComponent } from './Rutas/pokemon/pokemon.component';
import { EntrenadorComponent } from './Rutas/entrenador/entrenador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PokemonRestService} from './Services/pokemon-rest.service';
import { ModalEditarPokemonComponent } from './modales/modal-editar-pokemon/modal-editar-pokemon.component';
import {MatDialogModule} from "@angular/material/dialog";
import {EntrenadorRestService} from "./Services/entrenador-rest.service";
import { ModalEditarEntrenadorComponent } from './modales/modal-editar-entrenador/modal-editar-entrenador.component';
import { TiendaComponent } from './Rutas/tienda/tienda.component';
import { UsuarioComponent } from './Rutas/usuario/usuario.component';
import { UsuarioAdmComponent } from './Rutas/usuario-adm/usuario-adm.component';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { ModalSeleccionarPokemonComponent } from './modales/modal-seleccionar-pokemon/modal-seleccionar-pokemon.component';
import { ModalRegitrarUsuarioComponent } from './modales/modal-regitrar-usuario/modal-regitrar-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalEditarPokemonComponent,
    RutaLoginComponent,
    PokemonComponent,
    EntrenadorComponent,
    ModalEditarEntrenadorComponent,
    TiendaComponent,
    UsuarioComponent,
    UsuarioAdmComponent,
    ModalSeleccionarPokemonComponent,
    ModalRegitrarUsuarioComponent,
  ],
  entryComponents: [
    ModalEditarPokemonComponent,
    ModalEditarEntrenadorComponent,
    ModalSeleccionarPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TabViewModule,
    PanelModule,
    CardModule
  ],
  providers: [AuthService, PokemonRestService, EntrenadorRestService ],
  bootstrap: [AppComponent]
})

export class AppModule { }


