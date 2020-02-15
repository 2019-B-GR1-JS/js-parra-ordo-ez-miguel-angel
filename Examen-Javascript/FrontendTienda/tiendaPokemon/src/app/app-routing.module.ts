import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./Rutas/ruta-login/ruta-login.component";
import {PokemonComponent} from "./Rutas/pokemon/pokemon.component";
import {EntrenadorComponent} from "./Rutas/entrenador/entrenador.component";
import {TiendaComponent} from "./Rutas/tienda/tienda.component";


const routes: Routes = [
  {
    path:'login',
    component: RutaLoginComponent
  },
  {
    path: 'entrenador',
    component: EntrenadorComponent
  },
  {
    path: 'entrenador/:idEntrenador/pokemon',
    component: PokemonComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
