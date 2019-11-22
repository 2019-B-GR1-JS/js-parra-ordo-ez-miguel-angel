//07-promesas.js

const fs = require('fs');

const sumarDosNumeros = (correcto) => {
    return new Promise(
        (resolve, reject) =>{
            if(correcto) {
                resolve('yeii');
            }else {
                reject('buu');
            }
        }
    );
};
const promesaSumarDosNumeros = sumarDosNumeros('false'); //esto es una promesa
console.log('01) Iniciar');


promesaSumarDosNumeros
    .then(
        (ok) => {
            console.log('Ok ', ok)
        }
    )
    .catch(
        (error) =>
            console.log('Error ', error)
    );

console.log('03) Finalizar');

const leerArchivo = (pathArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivoLeido)=>{
                    if (error) {//callback
                        reject(error)
                    }
                    else {
                        resolve(archivoLeido)
                    }
                });
        }
    )
}

const promesaleerArchivo = leerArchivo('05-callbacks.js'); //esto es una promesa
console.log('01) Iniciar');

promesaleerArchivo
    .then(
        (contenido) => {
           //  console.log('Contenido ', contenido);
            return leerArchivo('04-funciones.js')
        }
    )
    .then(
        (contenido) => {
            // console.log('Contenido ', contenido);
        }
    )
    .catch(
        (error) =>
            console.log('Error JS', error)
    );



// Hay

const nombreArhivo = './05-callbacks.js';
console.log('INICIA SINCRONO');
try{

const contenidoArchivo= fs.readFileSync(nombreArhivo, 'utf-8')
    console.log(contenidoArchivo);
    console.log('Se leyo sincronamente');


} catch (error){
console.log('Error: ', error);
}
console.log('FINALIAZA SINCRONO');


//Transformar promesas a codigp sincrono
// Function o Function Anonymous
// 1 . async (permite usar codigo sincrono dentro de la funcion
// 2. Para transformar promesa a syncrono await

async function leerArchivoSync(){
 try{
     const contenido= await leerArchivo(nombreArhivo);
     console.log(contenido);
     console.log('Leimos con Async a Await')
     return 1;
 } catch (error) {
     console.log('Error', error)
     return 0;
 }
}

// toda funcion que usa async se transforma en promesa

leerArchivoSync()
    .then(
        (numero) =>{
            console.log(numero) //1
        }
    )
    .catch(
        (numero) => {
            console.log(numero); //0
        }
    )