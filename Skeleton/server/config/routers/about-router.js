var router = require('express').Router(),
    controllers = require('../../controllers');

router
    //.get('/', controllers.about.get)
    //.post('', controllers.about.add)

module.exports = function (app) {
    app.use('/about', router);
}