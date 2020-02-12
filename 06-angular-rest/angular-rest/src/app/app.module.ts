import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsuarioRestService} from "./services/usuario-rest.service";
import {ButtonModule} from "primeng/button";
import {TableModule} from 'primeng/table'
import {InputTextModule} from 'primeng/inputtext';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {MatDialogModule} from "@angular/material";
import { RutaInicioComponent } from './Rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './Rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionLibrosComponent } from './Rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import { RutaCrearLibroComponent } from './Rutas/ruta-crear-libro/ruta-crear-libro.component';
import { RutaBuscarLibroComponent } from './Rutas/ruta-buscar-libro/ruta-buscar-libro.component';
import { RutaEditarLibroComponent } from './Rutas/ruta-editar-libro/ruta-editar-libro.component';
import {LibroRestService} from "./services/libro-rest.service";
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionLibrosComponent,
    RutaCrearLibroComponent,
    RutaBuscarLibroComponent,
    RutaEditarLibroComponent
  ],
  entryComponents:[
    ModalEditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [UsuarioRestService, LibroRestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
