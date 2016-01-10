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
                };

                callback(null, done);
            });
    }
};