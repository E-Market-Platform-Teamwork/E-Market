var router = require('express').Router(),
    controllers = require('../../controllers');

    .post('', controllers.about.add)
    .get('/', controllers.about.getAbout)
module.exports = function (app) {
    app.use('/about', router);
}