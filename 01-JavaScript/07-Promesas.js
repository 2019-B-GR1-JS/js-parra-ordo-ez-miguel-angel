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
            console.log('Contenido ', contenido);
            return leerArchivo('04-funciones.js')
        }
    )
    .then(
        (contenido) => {
            console.log('Contenido ', contenido);
        }
    )
    .catch(
        (error) =>
            console.log('Error ', error)
    );






