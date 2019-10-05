
var fruitsRouter = require('./fruits.routes')


module.exports = function (app) {
    app.use('/', fruitsRouter);
};