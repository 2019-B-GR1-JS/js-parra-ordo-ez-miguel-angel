// Tipos de funciones en JavaScript
function imprimirMensaje(mensaje){
    if (typeof(mensaje) === 'string' ||
        typeof(mensaje) === 'number') {
        const impresion = `Mensaje ${mensaje}`;
        console.log(impresion);
        return impresion;
    } else {
        console.error('Error')
    }
}

//const respuesta = imprimirMensaje({a:1});
const respuesta = imprimirMensaje('Carlos');
//const respuesta = imprimirMensaje(123);
console.log(respuesta); // los voids devuelven --> undefined

///////////////*******************************//////////////////////

function sumarElementos(numeroUno,
                        ...arregloParametrosInfinitos) {
    console.log(arregloParametrosInfinitos); // [2,3,4,5]
    if (arregloParametrosInfinitos) { //truty
        return arregloParametrosInfinitos
            .reduce((valorInicial, valorActual) => {
                return valorInicial + valorActual
            }, numeroUno)
    }else{
        return numeroUno;
    }
}

const suma = sumarElementos(1,2,3,4,5);
console.log(suma);
/////////////////////////////////////////////
/*
const restar = function (a,b) {
    return a - b;
};
console.log(restarF(4,2));
console.log(restar(3,5));
*/
const restar = function retartF (a,b) {
    return a - b;
};
function restar2(a,b) {
    return a - b;
};

const restart1 = function (a,b) {
    return a - b;
};

// fat arrow function --> anonymus
const restart3 = (a,b) => {
    return a - b;
};

const restar4 = {
    nombre: 'restar',
    restarNumeros: (a,b) => {
        return a - b;
    }
};

const transformarAMayuscula = (letra) => {
    return letra.toUpperCase()
}
//const transformarAMayuscula = (letra) => letra.toUpperCase();
//const transformarAMayuscula = letra => letra.toUpperCase();
// const filtrarArreglo = arreglo.filter(a => a.id > 4);


//Destructurar parametros
const arregloNumerosUno = [1,2,3,4,5,6];
const arregloNumerosDos = [7,8,9,10,11,12];
const  arregloUnoDos = [...arregloNumerosUno,
    ...arregloNumerosDos];

//Destructurar el arrreglo
sumarElementos(...arregloNumerosUno);
// sumarElementos(1,2,3,4,5,6)
//sumarDosElementos(...arregloNumerosUno);
//sumarDosElementos(1,2)


const objetoMiguel = {
    nombre: 'Miguel',
};
const objetoParra = {
    apellido: 'Parra'
};

const objetoMiguelParra = {
    ...objetoMiguel,
    ...objetoParra,
    edad: 12,
}



delete objetoMiguelParra.edad;
function cambiarEdad(edad, objeto) {
    objeto.edad = edad;
    return objeto
}
const oMPEnString = JSON.stringify(objetoMiguelParra);
console.log(objetoMiguelParra);
const oMPClonado = JSON.parse(oMPEnString);
console.log(oMPEnString);
oMPEnString.edad  = 21;
console.log(oMPClonado);
console.log(objetoMiguelParra);

const clonadoMP = {
    ...objetoMiguelParra
};
console.log(clonadoMP);
clonadoMP.edad=21;
console.log(objetoMiguelParra);