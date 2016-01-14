var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/unauthorized', function(req,res){
        res.render('unauthorized')
    })
    .get('/',controllers.home.getHomePage)
    .get('*', function (req, res) {
        res.redirect('/unauthorized');
    });
module.exports = function (app) {
    app.use('/', router);
};