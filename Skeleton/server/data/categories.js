var Category = require('mongoose').model('Category');

module.exports = {
    create: function (order, callback) {
        Category.create(order, callback);
    },
    all: function (callback) {
        Category
            .find()
            .populate('products')
            .exec(function (err, done) {
                if (err) {
                    return callback(err);
                };

                callback(null, done);
            });
    }
};