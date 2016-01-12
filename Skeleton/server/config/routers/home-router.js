var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/unauthorized', function(req,res){
        res.render('unauthorized')
    })
    .get('/',controllers.home.getHomePage);

module.exports = function (app) {
    app.use('/', router);
};