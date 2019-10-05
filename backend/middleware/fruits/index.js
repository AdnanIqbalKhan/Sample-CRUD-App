const createFruits = require('./fruits.create.middlewares');
const deleteFruits = require('./fruits.delete.middlewares');
const retrieveFruits = require('./fruits.retrieve.middlewares');
const updateFruits = require('./fruits.update.middlewares');

module.exports = {
    createFruits,
    deleteFruits,
    retrieveFruits,
    updateFruits
}
