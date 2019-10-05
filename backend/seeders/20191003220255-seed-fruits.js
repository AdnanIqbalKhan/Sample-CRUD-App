'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('fruits', [{
      name: 'Apple',
      price: 150,
      imageURL: 'http://www.pngmart.com/files/5/Red-Apple-PNG-Photos.png',
      quantity: 2.5,
      unit: 'Kg',
      currency: 'PKR'
    }, {
      name: 'Mango',
      price: 200,
      imageURL: 'http://pluspng.com/img-png/mango-hd-png-mango-png-png-image-800.png',
      quantity: 2,
      unit: 'Kg',
      currency: 'PKR'
    }, {
      name: 'Banana',
      price: 100,
      imageURL: 'http://www.pngmart.com/files/1/Banana-PNG.png',
      quantity: 1,
      unit: 'Dozen',
      currency: 'PKR'
    }, {
      name: 'Orange',
      price: 150,
      imageURL: 'http://pluspng.com/img-png/orange-hd-png-download-png-image-orange-png-clipart-744.png',
      quantity: 1,
      unit: 'Dozen',
      currency: 'PKR'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('fruits', null, {});
  }
};
