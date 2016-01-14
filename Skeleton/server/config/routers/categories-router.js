var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/', controllers.categories.get)
    .get('*', function (req, res) {
        res.render('not-found');
    });
module.exports = function (app) {
    app.use('/categories', router);
};