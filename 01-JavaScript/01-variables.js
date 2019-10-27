// JSON
// var nombre= 'Adrian'
// Mutable --> reasignar a una variable otro valor (no les gusta a
// los desarrolladores)
let nombre = 'Miguel';
nombre = 'Angel';
nombre = 1;
// Algo que no cambia --> No mutables
const cedula = 1722305230;
const menaje = `
Siempre usar "const"
si ya toca usar "let"
y nunca usar "var"
`;


// DATOS PRIMITIVOS

let nombres = "Adrian";
console.log(typeof nombres, 'nombres');
let numeros = 1;
console.log(typeof numeros, 'numeros');
numeros = 1.1;
console.log(typeof numeros, 'numeros decimales');
let casado = false;
console.log(typeof casado, 'casado');
let hijos = null;
console.log(typeof hijos, 'hijos');
let mascotas = [];
console.log(typeof mascotas, 'mascotas')
let hermana = {};
console.log(typeof hermana, 'hermana')


//CONDICION
// TRUTY and FALSY

if ([]) {
    console.log('Es truty');
} else {
    console.log('Es falsy');
}

// JSON - JS
const miguel = {
    nombre: "Miguel",
    apellido: "Parra",
    edad: 24,
    casado: false,
    hijos: null,
    hermana: {nombre: 'Pamela'},
    mascotas: [{
        nombre: 'Cachetes',
    }],
}
console.log(miguel.nombre) // Miguel
console.log(miguel.hermana) // {nombre: 'Pamela')
console.log(adrian.mascotas[0].nombre);

//Agregar propiedades a un objeto JSON
miguel.sueldo = 1.2;
miguel["deudas"] = 10000;
console.log(miguel)

// para borrar propiedades de un objeto JSON
delete miguel.hijos;
console.log(miguel);