import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FILAS} from "./constantes/numero-filas-por-tabla";
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "./services/usuario-rest.service";
import {error} from "util";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private readonly _authService:AuthService){

  }

  ngOnInit(): void {
  }

}

