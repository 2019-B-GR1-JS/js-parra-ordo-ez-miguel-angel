import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn:'root' //va ser proveido y se va a declarar por0 primera vez en la raiz
})
export class UsuarioRestService{
// Inyeccion de dependencias
  url = environment.url+'/usuario';
  constructor(
    //public readonly httpClient: HttpClient // Servicio --> http
    private readonly _httpClient: HttpClient // Servicio --> http
  ){

  }
  editar(id: number, datos):Observable<any>{
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }

  buscar(busqueda:string):Observable<any>{
    let consulta = '';
    if(busqueda){
      consulta = '?nombre='+busqueda;
    }
    const urlBuscar = this.url +consulta ;
    return this._httpClient
      .get(
        urlBuscar
      );
  }
  eliminar(id:number):Observable<any>{
    const urlEliminar = this.url +'/' + id;
    return this._httpClient
      .delete(
        urlEliminar
      );
  }

  ingreasar(datos):Observable<any>{
    const urlIngresar = this.url;
    return this._httpClient
      .post(
        urlIngresar,
        datos
      );
  }


}


