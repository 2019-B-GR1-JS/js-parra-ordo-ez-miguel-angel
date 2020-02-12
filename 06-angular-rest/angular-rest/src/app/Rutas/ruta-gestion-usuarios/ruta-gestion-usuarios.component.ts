import { Component, OnInit } from '@angular/core';
import {FILAS} from "../../constantes/numero-filas-por-tabla";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {UsuarioRestService} from "../../services/usuario-rest.service";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  title = 'angular-rest';
  url ='http://localhost:1337';
  usuarios = [];
  Filas = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  busquedaUsuario =  '';

// INYECCION DE DEPENDENCIA!
  //Las Dependencias son Servicios
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuariorestService: UsuarioRestService

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
    const usuarios$ = this._httpClient.get(urlUsuarios
    );
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
  editar(usuario) {
    console.log('Editando usuario', usuario);
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {width: '500px', data: {usuario}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            this.editarUsuarioHTTP(usuario.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }

  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuariorestService
      .editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => { // try
          console.log(usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === id;
              }
            );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
          this.usuarios[indice].rol = datos.rol;

        },
        (error) => { // catch
          console.error(error)
        }
      )
  }

  eliminar(usuario) {
    const eliminar$ = this._usuariorestService
      .eliminar(usuario.id);
    eliminar$
      .subscribe(
        (usuarioEliminado) => {
          console.log(usuarioEliminado);
          // INDICE
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado) => {
                return usuarioBuscado.id === usuario.id;
              }
            );
          this.usuarios.splice(indice, 1);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  buscar() {
    const busqueda$ = this._usuariorestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe(
        (usuarios) => { // OK - TRY
          this.usuarios = usuarios;
        },
        (error) => { // ERROR - CATCH
          console.error(error);
        }
      )
  }
  ingresar(){
      const matDialogRefModalEditarUsuario = this._matDialog
        .open(
          ModalEditarUsuarioComponent,
          {width: '500px',
          }
        );
      const respuestaDialogo$ = matDialogRefModalEditarUsuario
        .afterClosed();

      respuestaDialogo$
        .subscribe(
          (datos) => { // try
            console.log('Datos', datos);
            if (datos) {
              this.ingresarUsuarioHTTP(datos);
            } else {
              // undefined
            }
          },
          (error) => { // catch
            console.log('Error', error);
          }
        );
  }

  ingresarUsuarioHTTP(datos) {
    const usuarioIngresado$ = this._usuariorestService
      .ingreasar(datos);
    usuarioIngresado$
      .subscribe(
        (usuarioIngresado: any) => { // try
          console.log(usuarioIngresado);
            this.usuarios.push(usuarioIngresado);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }


  usuariosFiltrados() {
    return this.usuarios
      .filter(
        (usuario) => {
          return usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.correo.toLowerCase().includes(this.correoFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.password.toLowerCase().includes(this.passwordFiltrado.toLowerCase());
        }
      );
  }

}
