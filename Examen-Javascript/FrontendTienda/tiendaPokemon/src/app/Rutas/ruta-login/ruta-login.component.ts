import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarPokemonComponent} from "../../modales/modal-editar-pokemon/modal-editar-pokemon.component";
import {ModalRegitrarUsuarioComponent} from "../../modales/modal-regitrar-usuario/modal-regitrar-usuario.component";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  url = environment.url;
  correo = '';
  password = '';

  constructor(
    private readonly _authService: AuthService,
    private readonly _matDialog: MatDialog,
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }



  login() {
    const respuestaLogin$ = this._authService.login(this.correo, this.password);
    respuestaLogin$
      .subscribe(
        (datos: any[]) => {
          if (datos.length > 0) {
            console.log('Login exitoso');
            this._authService.estaLogueado = true;
            this._authService.sesion = datos[0]; // tenemos gardado el usuario
            if (this._authService.sesion.rol === 'usuario') {
              this._router.navigate(['/usuario']);
            } else {
              this._router.navigate(['/entrenador']);
            }
          } else {
            console.log('No existe el usuario');
          }
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }
  registrar() {
    const matDialogRefModalRegistrarUsuario = this._matDialog
      .open(
        ModalRegitrarUsuarioComponent,
        {width: '450px'}
      );
    /*const  respuestaDialogo$ = matDialogRefModalRegistrarUsuario
      .afterClosed();
    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Esta es la respuesta del Dialogo: ', datos);
          if (datos) {
            this.registrarUsuarioHttp(datos);
          } else {
            // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );*/
  }

  registrarUsuarioHttp(usuario) {

  }

}
