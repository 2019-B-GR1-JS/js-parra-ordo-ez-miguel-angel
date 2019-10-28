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
console.log(suma(1,2,3)); // Con parentesis es la ejecucion

const resultadoCalculo = calculo(
    numeroUno,
    numeroDos,
    (numUno, numDos, total) => {
        return total/2
    });


console.log('Resultado calculo: ', resultadoCalculo);



