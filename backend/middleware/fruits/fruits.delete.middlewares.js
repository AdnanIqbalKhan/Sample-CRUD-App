const _ = require('lodash');

module.exports = deleteFruits = (req, res, next) => {
    console.log("Delete Fruits")
    var body = req.body
    var errors = []
    console.log(body)
    try {
        body.id = parseInt(body.id)
        if (_.isNaN(body.id)) {
            errors.push({ error: 100300, message: "Invalid id" })
        }
    } catch{
        errors.push({ error: 100300, message: "Invalid id" })
    }
    console.log(errors, body.id)
    if (errors.length > 0) {
        return res.send(errors)
    }

    next()
}
