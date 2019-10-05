const url = require("url");
const _ = require('lodash');

module.exports = updateFruits = (req, res, next) => {
    console.log("Update Fruits")
    var body = req.body
    var errors = []
    if (body.hasOwnProperty('id')) {
        delete body['id'];
    }

    if (!(_.isString(body.name) && !_.isEmpty(body.name))) {
        errors.push({ error: 100001, message: "Invalid name" })
    }

    try {
        body.price = parseInt(body.price)
        if (_.isNaN(body.id)) {
            errors.push({ error: 100002, message: "Invalid price" })
        }
    } catch{
        errors.push({ error: 100002, message: "Invalid price" })
    }

    if (!(_.isString(body.imageURL) && !_.isEmpty(body.imageURL))) {
        errors.push({ error: 100003, message: "Invalid imageURL" })
    } else {
        try {
            url.parse(body.imageURL)
        } catch{
            errors.push({ error: 100003, message: "Invalid imageURL" })
        }
    }

    try {
        body.quantity = parseFloat(body.quantity)
        if (_.isNaN(body.id)) {
            errors.push({ error: 100004, message: "Invalid quantity" })
        }
    } catch{
        errors.push({ error: 100004, message: "Invalid quantity" })
    }

    if (!(_.isString(body.unit) && !_.isEmpty(body.unit))) {
        errors.push({ error: 100005, message: "Invalid unit" })
    }

    if (!(_.isString(body.currency) && !_.isEmpty(body.currency))) {
        errors.push({ error: 100006, message: "Invalid currency" })
    }

    if (errors.length > 0) {
        return res.send(errors)
    }

    next()
}
