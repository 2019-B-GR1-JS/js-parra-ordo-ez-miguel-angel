/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nickname: {
      type: 'string'
    },
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    correo: {
      type: 'string'
    },
    edad: {
      type: 'number'
    },
    password: {
      type: 'string'
    },
    rol: {
      type: 'string'
    },
    comprasDelUsuario: {
      collection: 'cabeceraCarrito',
      via: 'idUsuario'
    }

  },

};

