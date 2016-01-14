var categories = require('../data/products'),
    services = require('../services');

module.exports = {
    get: function (req, res) {
        var filterString = req.query.filterby || '';
        var page = req.query.page || 1;
        services.products.getAll(filterString, page)
            .then(function (dat) {
                console.log(dat);
                res.render('products/products', {products: dat, totalPages: dat.totalPages, showPagination: true});
            }, function (err) {
                res
                    .status(404)
                    .send(err);
            });
    },
    getAuthenticated: function (req, res) {
        services.products.getAll('')
            .then(function (dat) {
                console.log(dat);
                res.render('products/productsAdmin', {products: dat});
            }, function (err) {
                res
                    .status(404)
                    .send(err);
            });
    },
    add: function (req, res) {
        services.products.create(req.body)
            .then(function (dat) {
                console.log(dat);
                res.status(201);
                res.redirect("/admin/products");
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
                res.redirect('/admin/products');
            }, function (err) {
                console.log(err.message);
                res.status(404)
                    .send(err.message);
            });
    },
    getById: function (req, res) {
        services.products.getById(req.params.id)
            .then(function (product) {
                res.render('products/details', {product: product});
            }, function (err) {
                console.log(err.message);
                res.status(404)
                    .send(err.message);
            })
    },
    update: function (req, res) {
        services.products.update(req.params.id, req.body)
            .then(function (product) {
                res.redirect('/admin/products');
            }, function (err) {
                res.status(404)
                    .send(err.message);
            });
    },
    getUpdateForm: function (req, res) {
        var allCategories;
        services.categories.getAll()
            .then(function (categories) {
                allCategories = categories;
                return services.products.getById(req.params.id)
            })
            .then(function (product) {
                res.render('products/edit', {product: product, categories: allCategories});
            }, function (err) {
                res.status(404)
                    .send(err.message);
            });
    },
    getProductsByCategoryId: function (req, res) {
        var categoryId = req.params.id,
            page = req.query.page,
            sortByPrice = req.query.sortByPrice,
            sortByDate = req.query.sortByDate;

        services.categories.getProductsByCategoryId(categoryId, page, sortByPrice, sortByDate)
            .then(function (category) {
                res.render('products/products', {
                    products: category.products,
                    totalPages: category.totalPages,
                    categoryId: category.id,
                    showPagination: true
                });
            }, function (err) {
                res.status(404)
                    .send(err.message);
            })
    }
};
