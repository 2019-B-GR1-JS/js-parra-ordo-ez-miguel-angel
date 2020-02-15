import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-pokemon',
  templateUrl: './modal-editar-pokemon.component.html',
  styleUrls: ['./modal-editar-pokemon.component.scss']
})
export class ModalEditarPokemonComponent implements OnInit {
numero = '';
nombre = '';
poderUno = '';
poderDos = '';
fechaCaptura = '';
nivel = '';
precio = '';
idEntrenador = '';
crear = false;


  constructor(
    public dialogRef: MatDialogRef<ModalEditarPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log('datos que han llegado al modal: ', this.data);
    if (this.data.pokemon !== undefined) {
      this.numero = this.data.pokemon.numero;
      this.nombre = this.data.pokemon.nombre;
      this.poderUno = this.data.pokemon.poderUno;
      this.poderDos = this.data.pokemon.poderDos;
      this.fechaCaptura = this.data.pokemon.fechaCaptura;
      this.nivel = this.data.pokemon.nivel;
      this.precio = this.data.pokemon.precio;
      this.idEntrenador = this.data.pokemon.idEntrenador.id;
    } else {
     this.crear = true;
     this.idEntrenador = this.data;
    }
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }

  aceptar() {
    console.log('dcfvgbhnjkmdfvghbnjkmcfvghb: ', this.idEntrenador)

    this.dialogRef.close({
      numero: this.numero,
      nombre: this.nombre,
      poderUno: this.poderUno,
      poderDos: this.poderDos,
      fechaCaptura: this.fechaCaptura,
      nivel: this.nivel,
      precio: this.precio,
      idEntrenador: this.idEntrenador
    });
  }

}
