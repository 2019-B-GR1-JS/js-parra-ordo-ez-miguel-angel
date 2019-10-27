let arregloNumeros = [1,2,3,4,5,6,7,8,9,10];
// ########################################     FOREACH     ######################################## //

console.log('############### IMPLEMENTACION FOR EACH ###############\n');
console.log('Arreglo: ', arregloNumeros);

function forEachLocal(arreglo, funcion) {
    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial ++) {
        funcion(arreglo[indiceInicial], indiceInicial, arreglo);
    }
}

const resultadoForEach = forEachLocal(arregloNumeros, (valorActual, indiceActual, arreglo) => {
    console.log('Valor Actual:', valorActual)
});

console.log('Resultado For Each: ', resultadoForEach, '\n');

// ########################################     MAP     ######################################## //

const valorASumar = 8;
function mapLocal(arreglo , funcion) {
    nuevoArreglo = [];
    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial ++) {
        nuevoArreglo.push(funcion(arreglo[indiceInicial], indiceInicial, arreglo)
        );
    }
    return nuevoArreglo;
}

const resultadoMapLocal = mapLocal(arregloNumeros,
    (valorActual, indiceActual, arreglo) => {
        return valorActual + valorASumar;
    });

console.log('############### IMPLEMENTACION MAP ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Valor a sumar: ', valorASumar);
console.log('Resultado Map: ', resultadoMapLocal, '\n');

// ########################################     FILTER     ######################################## //

const condicion1 = 7;
function filterLocal(arreglo, funcion){
    const nuevoArreglo=[];
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        if(funcion(arreglo[indiceInicial],indiceInicial,arreglo)){
            nuevoArreglo.push(arreglo[indiceInicial]);
        }
    }
    return nuevoArreglo;
}

const respuestaFilter = filterLocal(arregloNumeros,
    (valorActual, indiceActual, arreglo) => {
        return valorActual > condicion1;
    });

console.log('############### IMPLEMENTACION FILTER ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Condicion: ', condicion1);
console.log('Respuesta Filter: ', respuestaFilter, '\n');

// ########################################     SOME     ######################################## //

condicion2 = 9;
function someLocal(arreglo, funcion){
    let respuesta = false;
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        if (funcion (arreglo[indiceInicial], indiceInicial, arreglo)){
            respuesta = true;
            break;
        }
    }
    return respuesta;
}

const respuestaSome = someLocal(arregloNumeros,
    (valorActual, indiceActual, arreglo) =>{
        return valorActual > condicion2;
    });

console.log('############### IMPLEMENTACION SOME ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Condicion: ', condicion2);
console.log('Respuesta Filter: ', respuestaSome, '\n');

// ########################################     EVERY     ######################################## //

const condicion3 = 1;
function everyLocal(arreglo, funcion){
    let respuesta = true;
    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++ ){
        if (!funcion(arreglo[indiceInicial], indiceInicial, arreglo)) {
            respuesta = false;
            break;
        }
    }
    return respuesta;
}

const respuestaEvery = everyLocal(arregloNumeros,
    (valorActual, indiceActual, arreglo) => {
        return valorActual > condicion3;
    });

console.log('############### IMPLEMENTACION EVERY ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Condicion: ', condicion3);
console.log('Respuesta Filter: ', respuestaEvery, '\n');

// ########################################     FIND     ######################################## //

const valorABuscar = 5;
function findLocal(arreglo, funcion){
    for (let i = 0; i < arreglo.length; i++){
        if(funcion(arreglo[i], i, arreglo)){
            return arreglo[i];
        }
    }
}

const respuestaFind = findLocal(arregloNumeros,
    (valorActual, indiceActual, arreglo) => {
        return valorActual === valorABuscar;
    });

console.log('############### IMPLEMENTACION FIND ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Valor a buscar: ', valorABuscar);
console.log('Respuesta Find: ', respuestaFind, '\n');

// ########################################     FIND INDEX     ######################################## //

const valorABuscar2 = 9;
function findIndexLocal(arreglo, funcion){
    let respuesta = -1;
    for (let i = 0; i < arreglo.length; i++){
        if(funcion(arreglo[i], i, arreglo)){
            respuesta = i;
        }
    }
    return respuesta;
}

const respuestaFindIndex = findIndexLocal(arregloNumeros,
    (valorActual, indiceActual, arreglo) => {
        return valorActual === valorABuscar2;
    });

console.log('############### IMPLEMENTACION FIND INDEX ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Valor a buscar: ', valorABuscar2);
console.log('Respuesta FindIndex: ', respuestaFindIndex, '\n');

// ########################################     REDUCE    ######################################## //

const valorIni = 4;
function reduceLocal(arreglo, funcion, valorInicial){
    let respuesta = valorInicial;
    for (let i = 0; i < arreglo.length; i++){
        respuesta = funcion (respuesta, arreglo[i], i, arreglo);
    }
    return respuesta;
}

const respuestaReduce = reduceLocal(arregloNumeros,
    (valorInicial, valorActual, indiceActual, arreglo) => {
        return valorInicial + valorActual;
    }, valorIni);

console.log('############### IMPLEMENTACION REDUCE ###############\n');
console.log('Arreglo: ', arregloNumeros);
console.log('Valor inicial: ', valorIni);
console.log('Respuesta Reduce: ', respuestaReduce, '\n');