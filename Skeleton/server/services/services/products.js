var products = require('../../data/products');

module.exports = {
    getAll: function () {
        var promise = new Promise(function (resolve, reject) {
            products.all(function (err, done) {
                if (err) {
                    reject(err);
                };

                resolve(done);
            });
        });

        return promise;
    },
    create: function (product) {
        var promise = new Promise(function (resolve, reject) {
            products.create(product, function (err, done) {
                if (err) {
                    reject(err);
                };

                resolve(done);
            });
        });

        return promise;
    }
};
