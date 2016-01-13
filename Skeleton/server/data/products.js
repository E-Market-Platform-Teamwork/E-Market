var Product = require('mongoose').model('Product');

module.exports = {
    create: function (product, callback) {
        Product.create(product, callback);
    },
    all: function (filterString, callback) {
        Product
            .find({'name': new RegExp('.*' + filterString + '.*', 'i')})
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
    },
    update: function (id, product, callback) {
        console.log("_______Product before update in data layer_______");
        console.log(product);
        Product.update({ _id: id }, product, callback);
    },
    getLatestTen: function (callback) {
        Product.find({}, {}, {
            sort: { 'dateUpdated': -1 },
            limit: 10
        }, callback);
    }
};