var categories = require('../data/products'),
    services = require('../services');

module.exports = {
    get: function (req, res) {
        services.products.getAll()
            .then(function (dat) {
                console.log(dat);
                res.render('products/products', {products: dat});
            }, function (err) {
                res
                    .status(404)
                    .send(err);
            });
    },
    add: function (req, res) {
       console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(req.body.imageUrl);
        services.products.create(req.body)
            .then(function (dat) {
                console.log(dat);
                res.status(201)
                    .send("Product added!");
            }, function (err) {
                res.status(404)
                    .send(err);
            });
    },
    getAddForm: function (req, res) {
        services.categories.getAll()
            .then(function (dat) {
                res.render('products/add-product', {categories: dat});
            }, function (err) {
                res.status(404)
                    .send(err);
            });
    },
    remove: function (req, res) {
        services.products.removeById(req.params.id)
            .then(function (dat) {
                console.log('product removed');
                res.redirect('/products');
                res.send(dat);
            }, function (err) {
                console.log(err.message);
                res.status(404)
                    .send(err.message);
            });
    }
};