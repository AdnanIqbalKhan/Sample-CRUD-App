'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fruits = sequelize.define('Fruits', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    unit: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {});
  Fruits.associate = function(models) {
    // associations can be defined here
  };
  return Fruits;
};