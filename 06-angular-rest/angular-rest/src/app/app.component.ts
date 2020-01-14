import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FILAS} from "./constantes/numero-filas-por-tabla";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-rest';
  url ='http://localhost:1337';
  usuarios = [];
  Filas = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';

// INYECCION DE DEPENDENCIA!
  //Las Dependencias son Servicios
  constructor(
    private readonly _httpClient: HttpClient
  ) {
// CASI NUNCA HACER CONFIGURACIONES
  }

  ngOnInit(): void {
    //http://localhost:1337 + /usuario

    //CORS
    //http://localhost:4200--> http://localhost:1337
    //http://gmail.com --> http://facebook.com

    const urlUsuarios = this.url + '/usuario';
    // $ --> Observable
    const usuarios$ = this._httpClient.get(urlUsuarios);
    usuarios$
      .subscribe(
        (usuarios: any[]) =>{ //TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;
        },
        (error) => { //CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuario'
          })

        }
      )
  };

  editar(usuario){
    console.log('Editando usuario', usuario)
  }
  eliminar(usuario){
    console.log('Eliminando usuario', usuario)
  }
  usuariosFiltrados(){
    return this.usuarios
      .filter(
        (usuario) => {
          return usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase())
        }
      )
      .filter(
        (usuario) => {
          return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase())
        }
      )
      .filter(
        (usuario) => {
          return usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase())
        }
      )
      .filter(
        (usuario) => {
          return usuario.password.toLowerCase().includes(this.passwordFiltrado.toLowerCase())
        }
      )
  }


}
