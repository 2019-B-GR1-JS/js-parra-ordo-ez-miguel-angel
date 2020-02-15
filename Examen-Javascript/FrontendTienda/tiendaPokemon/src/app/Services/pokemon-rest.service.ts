import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PokemonRestService {
  url = environment.url + 'pokemon';
  constructor(
    private readonly _httpClient: HttpClient,
  ) {
  }

  editar(id: number, datos): Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }
  eliminar(id: number): Observable<any> {
    const urlEliminar = this.url + '/' + id;
    return this._httpClient
      .delete(
        urlEliminar
      );
  }
  ingresar(datos): Observable<any> {
    console.log('Esto recibe el insertar: ',datos)
    const ingresarUrl = this.url;
    return this._httpClient
      .post(
        ingresarUrl,
        datos,
      );
  }
  buscar(busqueda: string): Observable<any>{
    let consulta = '';
    if (busqueda) {
      consulta = '?nombre=' + busqueda;
    }
    const buscarUrl = this.url + consulta;
    return this._httpClient
      .get(
        buscarUrl
      );
  }
  buscarPorEntrenador(busqueda, nombrePokemon): Observable<any>{

    let consulta = '';
    if (busqueda) {
      consulta = '?' + busqueda;
    }
    if(nombrePokemon) {
      consulta = consulta + '&nombre=' + nombrePokemon;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }
}
