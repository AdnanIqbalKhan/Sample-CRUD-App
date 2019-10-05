const db = require('../../models');
const _ = require('lodash');

module.exports = retrieveFruits = (req, res) => {
    return db.Fruits.findAll({ where: req.query })
        .then((fruits) => {
            if (_.isEmpty(fruits)) {
                return res.send({ error: 200100, message: "No Record Found" })
            }

            return res.send(fruits)
        })
        .catch((err) => {
            return res.send({ error: 200101, message: "Error occur in querying fruits", err: err })
        });
}
