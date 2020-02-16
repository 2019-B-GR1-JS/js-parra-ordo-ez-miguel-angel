import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-seleccionar-pokemon',
  templateUrl: './modal-seleccionar-pokemon.component.html',
  styleUrls: ['./modal-seleccionar-pokemon.component.scss']
})
export class ModalSeleccionarPokemonComponent implements OnInit {
  pokemones: any = [];
  busquedaPokemon = '';
  filas = 5;
  url = 'http://localhost:1338';

  constructor(
    public dialogRef: MatDialogRef<ModalSeleccionarPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly _httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    const urlPokemon = this.url + '/pokemon';
    const pokemon$ = this._httpClient
      .get(urlPokemon);
    pokemon$
      .subscribe(
        (pokemones: any[]) => {
          console.log('Pokemones actuales en la base: ', pokemones);
          this.pokemones = pokemones;
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando entrenador',
          });
        }
      );
  }
  buscar() {
    let consulta = '';
    if (this.busquedaPokemon) {
      consulta = '?nombre='+this.busquedaPokemon;
    }
    const urlBuscarPokemon = this.url + '/pokemon' + consulta;
    const pokemonesABuscar$ = this._httpClient
      .get(
        urlBuscarPokemon
      );
    pokemonesABuscar$
      .subscribe(
        (pokemonesEncontrados) => {
          this.pokemones = pokemonesEncontrados;
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }
  enviar(pokemon) {
    this.dialogRef.close({
      nombre: pokemon.nombre,
      precio: pokemon.precio,
      idEntrenador: pokemon.idEntrenador.id,
      idPokemon: pokemon.id
    });
  }
}
