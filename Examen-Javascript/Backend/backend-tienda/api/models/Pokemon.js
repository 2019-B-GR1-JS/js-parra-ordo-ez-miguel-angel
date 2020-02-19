/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numero: {
      type: 'number'
    },
    nombre: {
      type: 'string'
    },
    poderUno: {
      type: 'string'
    },
    poderDos: {
      type: 'string'
    },
    fechaCaptura: {
      type: 'string'
    },
    nivel: {
      type: 'number'
    },
    precio: {
      type: 'number'
    },
    idEntrenador: {
      model: 'entrenador',
      required: true
    }
  },

};

