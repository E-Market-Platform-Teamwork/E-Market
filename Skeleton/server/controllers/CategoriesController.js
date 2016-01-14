module.exports = function (services) {
    return {
        get: function (req, res) {
            services.categories.getAll()
                .then(function (dat) {
                    res.render('categories/categories', {categories: dat});
                }, function (err) {
                    res
                        .status(404)
                        .send(err);
                });
        },

        getAuthenticated: function (req, res) {
            services.categories.getAll()
                .then(function (dat) {
                    res.render('categories/adminCategories', {categories: dat});
                }, function (err) {
                    res
                        .status(404)
                        .send(err);
                });
        },

        getAddCategory: function (req, res) {
            res.render('categories/add-categorie');
        },

        create: function (req, res) {
            services.categories.create(req.body)
                .then(function (dat) {
                    console.log(dat);
                }, function (err) {
                    res.status(404)
                        .send(err);
                });
        },

        remove: function (req, res) {
            services.categories.removeById(req.query.id)
                .then(function (dat) {
                    console.log('category removed');
                    res.send(dat);
                }, function (err) {
                    console.log(err.message);
                    res.status(404)
                        .send(err.message);
                });
        },

        getManage: function (req, res) {
            services.categories.getAll()
                .then(function (dat) {
                    res.render('categories/manage-categories', {categories: dat});
                }, function (err) {
                    res
                        .status(404)
                        .send(err);
                });
        },

        update: function (req, res) {
            services.categories.update(req.params.id, req.body)
                .then(function (category) {
                    res.redirect('/admin/categories');
                }, function (err) {
                    res.status(404)
                        .send(err.message);
                });
        },

        getUpdateForm: function (req, res) {
            services.categories.getById(req.params.id)
                .then(function (category) {
                    res.render('categories/editCategory', {category: category});
                }, function (err) {
                    res.status(404)
                        .send(err.message);
                });
        }
    }
};