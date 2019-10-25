// Funciones como parametros
function calculo (numUno, numDos, funcionCalculo){
    const total = numUno + numDos;
    return funcionCalculo (numUno, numDos, total);
}
const numeroUno = 3;
const numeroDos = 5;
const suma = (numeroUno, numeroDos, total) => {
    return total;
};

console.log(suma); // Nos devuelve la definicion FUNCTION cuando no usamos los parentesis
console.log(suma(1,2,3)); // Con parenntesis es la ejecucion


const resultadoCalculo = calculo(
    numeroUno,
    numeroDos,
    (numUno, numDos, total) => {
        return total/2
    });

console.log('resultado ', resultadoCalculo);

function forEachLocal(arreglo, funcion) {
    for (let indiceInicial = 0;
    indiceInicial < arreglo.length;
        indiceInicial ++) {
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
    }
}

let arregloN = [1,2,3,4,5,6,7,8,9,10];

forEachLocal(
    [1,2,3,4,5],
    (valorActual, indiceActual, arreglo) => {
    console.log('valor Actual ', valorActual)
});

function mapLocal(arreglo , funcion) {
    arregloNew = [];
    for (let indiceInicial = 0;
         indiceInicial < arreglo.length;
         indiceInicial ++) {
        arregloNew.push(
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        ));
    }
    return arregloNew;
}
const map = mapLocal(
    [1,2,3,4,5],
    (valorActual, indiceActual, arreglo) => {
        return valorActual + 2;
    });

console.log(map);


function filterLocal(arreglo, funcion){

    const arregloNew=[]

    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){

        if(funcion(arreglo[indiceInicial],indiceInicial,arreglo)){

            arregloNew.push(arreglo[indiceInicial]);

        }

    }

    return arregloNew

}
const filter = filterLocal(
    [1,2,3,4,5],
    (valorActual, indiceActual, arreglo) => {
        return valorActual > 5;
    });
console.log(filter);
