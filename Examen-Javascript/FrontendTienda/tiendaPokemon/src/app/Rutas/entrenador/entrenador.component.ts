import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntrenadorRestService} from '../../Services/entrenador-rest.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalEditarEntrenadorComponent} from "../../modales/modal-editar-entrenador/modal-editar-entrenador.component";
import {ModalEditarPokemonComponent} from "../../modales/modal-editar-pokemon/modal-editar-pokemon.component";

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.scss']
})
export class EntrenadorComponent implements OnInit {
  url = 'http://localhost:1338';
  filas = 3;
  busquedaEntrenador = '';
  entrenadores = [];
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _entrenadorRestService: EntrenadorRestService,
    private readonly __matDialog: MatDialog,
  ) { }

  ngOnInit() {
    const urlEntrenador = this.url + '/entrenador';
    const entrenador$ = this._httpClient
      .get(urlEntrenador);
    entrenador$
      .subscribe(
        (entrenadores: any[]) => {
          console.log('Entrenadores actuales en la base: ', entrenadores);
          this.entrenadores = entrenadores;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando entrenador',
          });
        }
      );
  }

  ingresar() {
    const matDialogRefModalIngresarEntrenador =  this.__matDialog
      .open(
        ModalEditarEntrenadorComponent,
        {width: '500px',
        }
      );
    const respuestaDialog$ = matDialogRefModalIngresarEntrenador
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datos) => {
          if (datos) {
            this.ingresarEntrenadorHttp(datos);
          } else {
            // undefined
          }
        },
        () => {}
      );
  }
  ingresarEntrenadorHttp(datos) {
    const entrenadorIngresadoS = this._entrenadorRestService
      .ingresar(datos);
    entrenadorIngresadoS
      .subscribe(
        (entrenadorIngresado) => {
          this.entrenadores.push(entrenadorIngresado);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  eliminar(entrenador) {
    const eliminar$ = this._entrenadorRestService
      .eliminar(entrenador.id);
    eliminar$
      .subscribe(
        (entrenadorEliminado) => {
          const indice = this.entrenadores
            .findIndex(
              (entrenadorBuscado) => {
                return entrenadorBuscado.id === entrenadorEliminado.id;
              }
            );
          this.entrenadores.splice(indice, 1);
        },
        (error) => {
          console.log('Error: ', error);
        }
      );

  }
  buscar() {
    const busqueda$ = this._entrenadorRestService
      .buscar(this.busquedaEntrenador);
    busqueda$
      .subscribe(
        (entrenadoresEncontrados) => {
          this.entrenadores = entrenadoresEncontrados;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  editar(entrenador) {
    console.log('Estos datos se recibe del entrenador: ', entrenador);
    const matDialogRefModalEditarPokemon = this.__matDialog
      .open(
        ModalEditarEntrenadorComponent,
        {width: '500', data: {entrenador}}
      );
    const respuestaDialog$ = matDialogRefModalEditarPokemon
      .afterClosed();
    respuestaDialog$
      .subscribe(
        (datosEditados) => {
          console.log('Estos son los datos editados: ', datosEditados);
          if (datosEditados) {
            this.editarEntrenadorHttp(entrenador.id, datosEditados);
          } else {
            // undefined
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  editarEntrenadorHttp(id, datosEditar) {
    const entrenadorEditado$ = this._entrenadorRestService
      .editar(id, datosEditar);
    entrenadorEditado$
      .subscribe(
        (entrenadorEdit: any) => {
          console.log('Usuario editado: ', entrenadorEdit);
          const indice = this.entrenadores
            .findIndex(
              (entrenador) => {
                return entrenador.id === id;
              }
            );
          this.entrenadores[indice].nombre = datosEditar.nombre;
          this.entrenadores[indice].apellido = datosEditar.apellido;
          this.entrenadores[indice].fechaNacimiento = datosEditar.fechaNacimiento;
          this.entrenadores[indice].numeroMedalla = datosEditar.numeroMedalla;
          this.entrenadores[indice].campeonActual = datosEditar.campeonActual;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
}
