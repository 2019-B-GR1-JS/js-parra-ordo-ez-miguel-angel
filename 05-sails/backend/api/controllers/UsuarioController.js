/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


};

// PROTOCOLO HTTP
// Necesitamos cosas importantes que siguen la logica del estandar RESTULL
// Find (varios registros)
//GET http://localhost:1337 + modelo --> GET http://localhost:1337/usuario
// FindOne
//GET http://localhost:1337 + modelo/id --> GET http://localhost:1337/usuario/1
// CreateOne
//POST http://localhost:1337 + modelo --> POT http://localhost:1337/usuario
// UpdateOne
//PUT http://localhost:1337 + modelo/id --> PUT http://localhost:1337/usuario/1
// DeleteOne
//DELETE http://localhost:1337 + modelo/id --> DELETE http://localhost:1337/usuario/1

/// En el protocolo HTTP se necesita dos cosas importantes el Metodo y la URL y opcionalmente los Psrametros

/* Parametros
de Ruta: http://localhost>1337/usuario/1 viajan dentro de la URL
de Ruta: http://localhost>1337/usuario/2 viajan dentro de la URL

Query
de Ruta: http://localhost>1337/usuario?nombre=Adrian&apellido=Eguez son siempre opcionales y estan despues del ?
http://localhost>1337/usuario?nombre=Adrian
http://localhost>1337/usuario PARAMETRO DE RUTA O DE CONSULTA NOS VA A LLEGAR COMO TEXTO AL BACKEND NO COMO NUMBER NI COMO BOOLEAN


BODY
no pueden viajar en la URL
http://localhost>1337/usuario
aqui ya se puede usar distintos tipos de datos. aqui se puede enviar y
 {
 nombre: 'Adrian', --> string
 apellido: 'Eguez; --> string
 correo: 'adrian@hotmail.com' --> string
 edad: 1 --> number
 casado: true --> boolean
 }

 pedido: 5, --> number
 detallePedido:{

 METODO HTTP
 - GET --> buscar'
 - POST --> Crear
 - PUT - Actualizar
 - DELETE --> Eliminar


 CODIGO HTTP (servidor )
 - 1 informacion
 - 2 ok
 - 3 redirecciones
 - 4 error cliente
 - 5 error servidor


 }
 */
