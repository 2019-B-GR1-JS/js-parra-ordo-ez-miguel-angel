const arreglo = [1,2,3,4,5,6,7,8,9,10];
console.log('arreglo',arreglo);
arreglo.push(11);
console.log('arreglo',arreglo);
arreglo.pop();
console.log('arreglo',arreglo);
arreglo.splice(1,0,1.1);
console.log('arreglo',arreglo);
arreglo.unshift(0);
console.log('arreglo',arreglo);
const respuestaIndice = arreglo.indexOf(4);
console.log(respuestaIndice);
arreglo.splice(respuestaIndice,1,);
console.log(arreglo);


// no se puede reasignar una variable constante o de lectura
// arreglo = [1,2,3,4,5,6,7,8,9,10,11];

const arregloNumeros = [1,2,3,4]; // arreglo de numbers
// arregloNumeros = ['a','b','c']; // modifique y ahora es arreglo de strings
// arregloNumeros = ['true','false']; // modifique y ahora es arreglo de booleanos
// arregloNumeros = ['a','1','true']; // modifique y ahora es arreglo de primitivos
// arregloNumeros = 1;

/*function suma(a,b){
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    } else {
        return 0;
        //throw new Error('Error'); // esta linea le hace caer al programa
    }
}
suma(1,2); // 3
suma(a, b); // 'ab'
suma(); // undefined + undefined
*/

