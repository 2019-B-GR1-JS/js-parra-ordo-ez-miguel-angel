import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {
  ancho = 200;
  alto = 200;

  @Input()
  titulo: string;

  @Input()
  imagen: string;

  @Input()
  textoImagen: string;

  @Input()
  textoBoton: string;

  @Output()// Evento
  public cambioSueldo = new EventEmitter();


  constructor() {
    console.log('Instanciando')
  }

  ngOnInit(): void { // La clase está lista
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy(): void { //la clase esta destruida
  }

  saludar(){
alert("HOLAAAAAAAAAAAAAAAAAAAAAAAA..................")

  }

  aumentarSueldo(){
    //this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    //this.textoBoton = (+this.textoBoton +1).toString();
  }

  aumentarAltoAncho() {
    this.ancho = this.ancho + 15;
    this.alto = this.alto + 20;
  }

}
