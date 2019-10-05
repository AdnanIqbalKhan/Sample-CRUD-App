const db = require('../../models');


module.exports = updateFruits = (req, res) => {
    var { id, ...data } = req.body
    return db.Fruits.update(data, {
        where: { id: id }
    }).then(() => {
        return res.send({ message: "Record updated successfully" });
    }).catch((err) => {
        return res.send({ error: 200200, message: "Error occur in updating fruits", err: err })
    });
}