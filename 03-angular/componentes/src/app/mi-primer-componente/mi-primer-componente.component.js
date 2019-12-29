"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MiPrimerComponenteComponent = /** @class */ (function () {
    function MiPrimerComponenteComponent() {
        this.cambioSueldo = new core_1.EventEmitter();
        this.mostrarResultados = new core_1.EventEmitter();
        console.log('Instanciando');
    }
    MiPrimerComponenteComponent.prototype.ngOnInit = function () {
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
    };
    MiPrimerComponenteComponent.prototype.ngOnDestroy = function () {
    };
    MiPrimerComponenteComponent.prototype.saludar = function () {
        alert('HOLAAAAAAAAAAAAAAAAAAAAAAAA..................');
    };
    MiPrimerComponenteComponent.prototype.aumentarSueldo = function () {
        // this.textoBoton = this.textoBoton + 1;
        this.textoBoton = (Number(this.textoBoton) + 1).toString();
        this.cambioSueldo.emit(this.textoBoton);
        // this.textoBoton = (+this.textoBoton +1).toString();
    };
    MiPrimerComponenteComponent.prototype.aumentarAltoAncho = function () {
        this.ancho = this.ancho + 15;
        this.alto = this.alto + 20;
    };
    MiPrimerComponenteComponent.prototype.escucharNumero = function (event) {
        console.log('Evento ', event);
        this.numeroUno = Number(event.srcElement.value);
        this.calcular();
    };
    MiPrimerComponenteComponent.prototype.escucharNumeroDos = function (event) {
        this.numeroDos = Number(event.srcElement.value);
        console.log(this.numeroDos);
        // this.enviarNumeroAOperaciones.emit(this.numDos);
        this.calcular();
    };
    MiPrimerComponenteComponent.prototype.calcular = function () {
        var numUno = Number(this.numeroUno);
        var numDos = Number(this.numeroDos);
        this.suma = numUno + numDos;
        console.log('S: ', numUno + numDos);
        this.resta = numUno - numDos;
        console.log('R: ', numUno - numDos);
        this.multiplicacion = numUno * numDos;
        console.log('M: ', numUno * numDos);
        this.division = numUno / numDos;
        console.log('D: ', numUno / numDos);
    };
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "titulo");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "imagen");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "textoImagen");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "textoBoton");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "numeroUno");
    __decorate([
        core_1.Input()
    ], MiPrimerComponenteComponent.prototype, "numeroDos");
    __decorate([
        core_1.Output() // Evento
    ], MiPrimerComponenteComponent.prototype, "cambioSueldo");
    __decorate([
        core_1.Output()
    ], MiPrimerComponenteComponent.prototype, "mostrarResultados");
    MiPrimerComponenteComponent = __decorate([
        core_1.Component({
            selector: 'app-mi-primer-componente',
            templateUrl: './mi-primer-componente.component.html',
            styleUrls: ['./mi-primer-componente.component.scss']
        })
    ], MiPrimerComponenteComponent);
    return MiPrimerComponenteComponent;
}());
exports.MiPrimerComponenteComponent = MiPrimerComponenteComponent;
