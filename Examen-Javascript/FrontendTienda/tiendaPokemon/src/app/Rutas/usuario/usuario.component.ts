import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Services/auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {ModalEditarEntrenadorComponent} from "../../modales/modal-editar-entrenador/modal-editar-entrenador.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalVisualizarCompraComponent} from "../../modales/modal-visualizar-compra/modal-visualizar-compra.component";


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  urlCompra = environment.url + 'cabeceraCarrito';
  compras = [];
  filas = 5;
  nombre = '';
  apellido = '';
  correo = '';
  nickname = '';
  edad = 0;
  busquedaFecha = '';
  id = '';

  constructor(
    private readonly _authService:AuthService,
    private readonly _httpClient: HttpClient,
    private readonly _router: Router,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.id = this._authService.sesion.id;
    this.nombre = this._authService.sesion.nombre;
    this.apellido = this._authService.sesion.apellido;
    this.correo = this._authService.sesion.correo;
    this.nickname = this._authService.sesion.nickname;
    this.edad = this._authService.sesion.edad;
    const consulta = '?idUsuario=' + this.id;
    const urlUsuarioCompra = this.urlCompra + consulta;
    const comprasHechasS = this._httpClient
      .get(urlUsuarioCompra);
    comprasHechasS
      .subscribe(
        (comprasConsultadas: any[]) => {
          this.compras = comprasConsultadas;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando compras',
          });
        }
      );
  }
  buscarPorFecha() {
    let consulta = '?idUsuario=' + this.id;
    if (this.busquedaFecha) {
      consulta = consulta + '&fecha=' + this.busquedaFecha;
    }
    const urlUsuarioCompra = this.urlCompra + consulta;
    const comprasHechasS = this._httpClient
      .get(urlUsuarioCompra);
    comprasHechasS
      .subscribe(
        (comprasConsultadas: any[]) => {
          this.compras = comprasConsultadas;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando compras',
          });
        }
      );
  }
  salir() {
    this._router.navigate(['/login']);
  }
  abrirCompra() {
    this._router.navigate(['/tienda']);
  }
  visualizarCompra(compra) {

      console.log('Estos datos se recibe del entrenador: ', compra);
      const matDialogRefModalEditarPokemon = this._matDialog
        .open(
          ModalVisualizarCompraComponent,
          {width: '500', data: {compra}}
        );
    }
}
