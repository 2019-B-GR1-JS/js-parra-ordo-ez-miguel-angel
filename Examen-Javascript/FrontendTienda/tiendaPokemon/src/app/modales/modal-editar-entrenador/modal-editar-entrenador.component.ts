import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-entrenador',
  templateUrl: './modal-editar-entrenador.component.html',
  styleUrls: ['./modal-editar-entrenador.component.scss']
})
export class ModalEditarEntrenadorComponent implements OnInit {
  nombre = '';
  apellido = '';
  fechaNacimiento = '';
  numeroMedalla = '';
  campeonActual = '';
  crear = false;
  constructor(
    public dialogRef: MatDialogRef<ModalEditarEntrenadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    console.log('datos en modal: ', this.data);
    if (this.data) {
      this.nombre = this.data.entrenador.nombre;
      this.apellido = this.data.entrenador.apellido;
      this.fechaNacimiento = this.data.entrenador.fechaNacimiento;
      this.numeroMedalla = this.data.entrenador.numeroMedalla;
      this.campeonActual = this.data.entrenador.campeonActual;
    } else {
      this.crear = true;
    }
  }
  cancelar() {
    this.dialogRef.close(); // cerrar la ventana del modal
  }

  aceptar() {
    this.dialogRef.close({
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      numeroMedalla: this.numeroMedalla,
      campeonActual: this.campeonActual,
    });
  }

}
