const url = require("url");
const _ = require('lodash');

module.exports = createFruits = (req, res, next) => {
    console.log("Update Fruits")

    var body = req.body
    console.log(body)
    var errors = []
    try {
        body.id = parseInt(body.id)
    } catch{
        errors.push({ error: 100200, message: "Invalid id" })
    }

    if (body.hasOwnProperty('name')) {
        if (!(_.isString(body.name) && !_.isEmpty(body.name))) {
            errors.push({ error: 100201, message: "Invalid name" })
        }
    }

    if (body.hasOwnProperty('price')) {
        try {
            body.price = parseInt(body.price)
            if (_.isNaN(body.id)) {
                errors.push({ error: 100202, message: "Invalid price" })
            }
        } catch{
            errors.push({ error: 100202, message: "Invalid price" })
        }
    }

    if (body.hasOwnProperty('imageURL')) {
        if (!(_.isString(body.imageURL) && !_.isEmpty(body.imageURL))) {
            errors.push({ error: 100203, message: "Invalid imageURL" })
        } else {
            try {
                url.parse(body.imageURL)
            } catch{
                errors.push({ error: 100203, message: "Invalid imageURL" })
            }
        }
    }

    if (body.hasOwnProperty('quantity')) {
        try {
            body.quantity = parseFloat(body.quantity)
            if (_.isNaN(body.id)) {
                errors.push({ error: 100204, message: "Invalid quantity" })
            }
        } catch{
            errors.push({ error: 100204, message: "Invalid quantity" })
        }
    }

    if (body.hasOwnProperty('unit')) {
        if (!(_.isString(body.unit) && !_.isEmpty(body.unit))) {
            errors.push({ error: 100205, message: "Invalid unit" })
        }
    }

    if (body.hasOwnProperty('currency')) {
        if (!(_.isString(body.currency) && !_.isEmpty(body.currency))) {
            errors.push({ error: 100206, message: "Invalid currency" })
        }
    }

    if (errors.length > 0) {
        return res.send(errors)
    }

    next()
}