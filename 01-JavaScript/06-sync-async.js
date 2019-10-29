const fileSystem = require('fs');
console.log('1) Iniciando');


fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
    callbackLeerArchivo,
);

function callbackLeerArchivo(error, datos){
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error
            error,
        })
    }else{
        console.log('################################################################## ARCHIVO 5 #########################################################');
        console.log('Datos 05: ', datos);
        fileSystem.readFile(
            './04-Funciones.js',
            'utf8',
            callbackLeerArchivo2,
        );
    }
}


function callbackLeerArchivo2(error, datos){
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error
            error,
        })
    }else{
        console.log('################################################################## ARCHIVO 4 #########################################################');
        console.log('Datos 04: ', datos);
        fileSystem.readFile(
            './03-operadores.js',
            'utf8',
            callbackLeerArchivo3,
        );
    }
}
function callbackLeerArchivo3(error, datos){
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error
            error,
        })
    }else{
        console.log('################################################################## ARCHIVO 3 #########################################################');
        console.log('Datos 03: ', datos);
        fileSystem.readFile(
            './02-objetos.js',
            'utf8',
            callbackLeerArchivo4,
        );
    }
}

function callbackLeerArchivo4(error, datos){
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error
            error,
        })
    }else{
        console.log('################################################################## ARCHIVO 2 #########################################################');
        console.log('Datos 02: ', datos);
        fileSystem.readFile(
            './01-variables.js',
            'utf8',
            callbackLeerArchivo5,
        );
    }
}

function callbackLeerArchivo5(error, datos){
    if(error){
        console.error({
            mensaje: 'Error leyendo archivo',
            //error: error
            error,
        })
    }else{
        console.log('################################################################## ARCHIVO 1 #########################################################');

        console.log('Datos 01: ', datos);
    }
}






/*() => { // las funciones que devuelven algo que no se ejecuta al principio se llaman callbacks
       // son asincronas
       console.log('3) Leyendo archivo');
   }*/
//funciones - operadores - objetos y variables