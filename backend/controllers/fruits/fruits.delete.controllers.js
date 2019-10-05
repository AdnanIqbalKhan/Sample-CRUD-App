const db = require('../../models');
const _ = require('lodash');

module.exports = deleteFruits = (req, res) => {
    return db.Fruits.findByPk(req.body.id)
        .then((fruits) => {
            if (_.isEmpty(fruits)) {
                return res.send({ error: 200300, message: "No Record Found" })
            }
            return db.Fruits.destroy({
                where: { id: req.body.id }
            })
        }).then(() => {
            return res.send({ message: "Record deleted successfully" });
        }).catch((err) => {
            return res.send({ error: 200301, message: "Error occur in deleting fruits", err: err })
        });
}