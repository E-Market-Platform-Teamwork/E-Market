var Product = require('mongoose').model('Product');

module.exports = {
    create: function(product, callback) {
        Product.create(product, callback);
    },
    all: function(callback){
        Product
            .find()
            .populate('categories')
            .exec(function (err, done) {
                if (err) {
                    return callback(err);
                }

                callback(null, done);
            });
    },
    remove: function (product, callback) {
        product.remove(function (err, done) {
            if (err) return callback(err);

            return callback(null, done);
        });
    },
    getById: function (id, callback) {
        Product.findOne({ _id: id }, function (err, done) {
            if (err) return callback(err);

            return callback(null, done);
        });
    }
};