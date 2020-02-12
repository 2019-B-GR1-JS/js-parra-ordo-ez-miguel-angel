import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./Rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./Rutas/ruta-login/ruta-login.component";
import {RutaGestionUsuariosComponent} from "./Rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionLibrosComponent} from "./Rutas/ruta-gestion-libros/ruta-gestion-libros.component";
import {RutaCrearLibroComponent} from "./Rutas/ruta-crear-libro/ruta-crear-libro.component";
import {RutaEditarLibroComponent} from "./Rutas/ruta-editar-libro/ruta-editar-libro.component";
import {RutaBuscarLibroComponent} from "./Rutas/ruta-buscar-libro/ruta-buscar-libro.component";
import {EstaLogeadoPolicy} from "./services/auth/politicas/esta-logeado.policy";


const routes: Routes = [
  {
    path:'inicio',
    component: RutaInicioComponent
  },
  {
    path:'login',
    component: RutaLoginComponent
  },
  {
    path:'inicio/gestion-usuarios',
    component: RutaGestionUsuariosComponent,
    canActivate: [
      EstaLogeadoPolicy
    ]
  },
  {
    path:'inicio/gestion-usuarios/:idUsuario/gestion-libros',
    component: RutaGestionLibrosComponent,
    children: [
      {
        path:'buscar',
        component: RutaBuscarLibroComponent
      },
      {
        path:'editar/:idLibro',
        component: RutaEditarLibroComponent
      },
      {
        path:'crear',
        component: RutaCrearLibroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
