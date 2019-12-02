import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {
  ancho: number;
  alto: number;
  suma: number;
  resta: number;
  multiplicacion: number;
  division: number;

  @Input()
  titulo: string;

  @Input()
  imagen: string;

  @Input()
  textoImagen: string;

  @Input()
  textoBoton: string;

  @Input()
  numeroUno: number;

  @Input()
  numeroDos: number;

  @Output()// Evento
  public cambioSueldo = new EventEmitter();
  @Output()
  mostrarResultados = new EventEmitter();


  constructor() {
    console.log('Instanciando');
  }

  ngOnInit(): void { // La clase está lista
    this.ancho = 200;
    this.alto = 200;
    this.suma = 0;
    this.resta = 0;
    this.multiplicacion = 0;
    this.division = 0;
    /*console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);*/
  }

  ngOnDestroy(): void { // la clase esta destruida
  }

  saludar() {
    alert ('HOLAAAAAAAAAAAAAAAAAAAAAAAA..................');

  }

  aumentarSueldo() {
    // this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    // this.textoBoton = (+this.textoBoton +1).toString();
  }

  aumentarAltoAncho() {
    this.ancho = this.ancho + 15;
    this.alto = this.alto + 20;
  }

  escucharNumero(event) {
    console.log('Evento ', event);
    this.numeroUno = Number(event.srcElement.value);
    this.calcular();
  }
  escucharNumeroDos(event) {
    this.numeroDos = Number(event.srcElement.value);
    console.log(this.numeroDos);
    // this.enviarNumeroAOperaciones.emit(this.numDos);
    this.calcular();
  }

  calcular() {
    const numUno = Number(this.numeroUno);
    const numDos = Number(this.numeroDos);


    this.suma = numUno + numDos;
    console.log('S: ', numUno + numDos);
    this.resta = numUno - numDos;
    console.log('R: ', numUno - numDos);
    this.multiplicacion = numUno * numDos;
    console.log('M: ', numUno * numDos);
    this.division = numUno / numDos;
    console.log('D: ', numUno / numDos);

  }


}
