var router = require('express').Router(),
    controllers = require('../../controllers'),
    auth = require('../auth');

router
    .get('/', controllers.categories.get)
    .get('/add', controllers.categories.getAddCategory)
    .post('/add', controllers.categories.create)
    .delete('/remove', controllers.categories.remove)
    .get('/manage', controllers.categories.getManage);

module.exports = function (app) {
    app.use('/categories', router);
}