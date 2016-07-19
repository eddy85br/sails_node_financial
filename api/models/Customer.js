/**
 * Customer.js
 *
 * @description :: Customer model, to describe client attributes.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      email: true
    },

    state: {
      type: 'string'
    }
  }
};

