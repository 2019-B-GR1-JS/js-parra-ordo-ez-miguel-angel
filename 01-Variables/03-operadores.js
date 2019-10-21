const arreglo = [1,2,3,4,5,6,7,8,9,10];
// for in
for (const i in arreglo){
    console.log('I:', arreglo[i])
}
//for of
for (const i of arreglo){
    console.log('I:', i)
}
// for
// while
// switch --> no existe en PYTHON :(

// forEach

const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, /*,arregloActual*/){
            console.log('ValorActual', valorActual);
            //console.log('indiceActual', indiceActual);
           // console.log('arregloActual', arregloActual);
        }
    );
console.log(respuestaForEach);

const respuestaMat = arreglo
    .map(
        function (valorActual) {
            return valorActual + 5;
        }
    );

const respuestaMap2 = arreglo.map(r => r + 5);

const respuestaFilter = arreglo
    .filter(
        function (valorActual) {
            return valorActual > 7;
        } // Devolver --> Expresiob --> Truty o Falsy
    ); //Nuevo Arreglo filreado

const respuestaSome = arreglo
    .some(
        function (valorActual) {
            return valorActual > 9 && valorActual < 11;
        } // Expresion
    ); //Devuelve un booleano

const respuestaEvery = arreglo
    .every(
        function (valorActual) {
            return valorActual > 1;
        } // Expresion
    ); //Devuelve un booleano

const respuestaMenoresADiez =
    arreglo.map((x) => (x/2)+7).some((y)=> y< 8);

const respuestaMenoresADiezFilter =
    arreglo.map((x) => (x/2)+7).filter((y)=> y< 8);

console.log('respuesta Map: ', respuestaMat);
console.log('arreglo: ', arreglo);
console.log('respuesta Map 2: ', respuestaMap2);
console.log('respuesta filter: ', respuestaFilter);
console.log('respuesta some: ', respuestaSome);
console.log('respuesta every: ', respuestaEvery);
console.log('Respuesta menores a 8= ',respuestaMenoresADiezFilter);

// a todos los numeros le dividan para 2 y le sumen 7 y quiero
// saber si hay algun numero menor a 8


