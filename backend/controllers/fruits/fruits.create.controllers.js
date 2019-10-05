const db = require('../../models');

module.exports = createFruits = (req, res) => {
    return db.Fruits.create(req.body)
        .then((fruits) => {
            return res.send({ message: "Record created successfully" });
        }).catch((err) => {
            return res.send({ error: 200000, message: "Error occur in creating fruits", err: err })
        });
}

