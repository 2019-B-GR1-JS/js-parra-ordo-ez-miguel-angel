import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogueado = false;
  sesion;

  constructor(
    private readonly _httpClient: HttpClient
  ){

  }

  login(correo: string, password: string){
    const url = environment.url + `usuario?correo=${correo}&password=${password}`;
    console.log('llego/aca', url)
    return this._httpClient
      .get(
        url
      );
  }

}
