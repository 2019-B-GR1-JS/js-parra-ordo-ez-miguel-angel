import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-modal-regitrar-usuario',
  templateUrl: './modal-regitrar-usuario.component.html',
  styleUrls: ['./modal-regitrar-usuario.component.scss']
})
export class ModalRegitrarUsuarioComponent implements OnInit {
  nickname = '';
  nombre = '';
  apellido = '';
  correo = '';
  edad = 0;
  password = '';
  passwordConfirmacion = '';
  rol = 'usuario';

  constructor(
    public dialogRef: MatDialogRef<ModalRegitrarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public readonly _httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close();
  }

  registrar() {
    const url = environment.url + 'usuario';
    const datos = {
      nickname: this.nickname,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      password: this.password,
      correo: this.correo,
      rol: this.rol
    }
    const usuarioIngresadoS = this._httpClient
      .post(url, datos);
    usuarioIngresadoS
      .subscribe(
        (usuarioIngresado) => {
          console.log('Usuario ', this.nombre, 'ingresado exitosamente');
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
    this.dialogRef.close();
  }

  validarPasswordsIguales(): boolean {
    if (this.password === this.passwordConfirmacion) {
      return false;
    } else {
      return true;
    }

  }
}
