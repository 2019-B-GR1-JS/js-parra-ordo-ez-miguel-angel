import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn:'root' //va ser proveido y se va a declarar por0 primera vez en la raiz
})
export class UsuarioRestService{
// Inyeccion de dependencias
  constructor(
    //public readonly httpClient: HttpClient // Servicio --> http
    private readonly _httpClient: HttpClient // Servicio --> http
  ){

  }
}


