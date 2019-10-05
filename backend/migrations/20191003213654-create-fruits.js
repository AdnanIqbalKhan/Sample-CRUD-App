'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fruits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      imageURL: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.DOUBLE
      },
      unit: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fruits');
  }
};