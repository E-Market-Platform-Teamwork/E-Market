var router = require('express').Router(),
    //usersController = require('../../controllers').categories,
    auth = require('../auth');

router
    .get('/',function (req, res) {
        res.render('index', {currentUser: req.user});
    })
    .get('*', function (req, res) {
        res.render('index', {currentUser: req.user});
    });

module.exports = function (app) {
        app.use('/admin', auth.isInRole('admin'), router);
};