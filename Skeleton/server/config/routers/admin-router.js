var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/',function (req, res) {
        res.render('admin-index', {currentUser: req.user});
    })
    .get('/categories', controllers.categories.getAuthenticated)
    .get('/categories/add', controllers.categories.getAddCategory)
    .post('/categories/add', controllers.categories.create)
    .delete('/categories/remove', controllers.categories.remove)
    .get('/categories/manage', controllers.categories.getManage)
    .get('*', function (req, res) {
        res.render('admin-index', {currentUser: req.user});
    });

module.exports = function (app) {
        app.use('/admin', auth.isInRole('admin'), router);
};