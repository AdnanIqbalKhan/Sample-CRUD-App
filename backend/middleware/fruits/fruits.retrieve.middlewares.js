const _ = require('lodash');

module.exports = retrieveFruits = (req, res, next) => {
    console.log("Retrieve Fruits")
    var errors = []
    var query = req.query
    if (query.hasOwnProperty('id')) {
        try {
            req.query.id = parseInt(req.query.id)
        } catch{
            errors.push({ error: 100100, message: "Invalid Id" })
        }
    }
    if (query.hasOwnProperty('name')) {
        if (!(_.isString(query.name) && !_.isEmpty(query.name))) {
            errors.push({ error: 100102, message: "Invalid Name" })
        }
    }
    
    if (errors.length > 0) {
        return res.send(errors)
    }

    next()
}