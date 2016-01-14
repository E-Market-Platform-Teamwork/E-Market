var router = require('express').Router(),
    controllers = require('../../controllers');

router
    .get('/', controllers.products.get)
    .get('/bycategory/:id', controllers.products.getProductsByCategoryId)
    .get('/:id', controllers.products.getById)
.get('*', function (req, res) {
    res.render('not-found');
});
module.exports = function (app) {
    app.use('/products', router);
};