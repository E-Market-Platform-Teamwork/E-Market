var categories = require('../data/categories'),
    services = require('../services');

module.exports = {
    get: function (req, res) {
        services.categories.getAll()
            .then(function (dat) {
                res.render('categories/categories', {categories: dat});
            }, function (err) {
                res
                    .status(404)
                    .send(err);
            });
    }
};