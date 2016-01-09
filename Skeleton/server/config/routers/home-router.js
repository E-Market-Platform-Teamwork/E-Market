var router = require('express').Router(),
//usersController = require('../../controllers').categories,
    auth = require('../auth');

router
    .get('/unauthorized', function(req,res){
        res.render('unauthorized')
    });

module.exports = function (app) {
    app.use('/', router);
};