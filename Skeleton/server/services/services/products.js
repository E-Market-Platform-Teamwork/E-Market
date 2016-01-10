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
    },
    removeById: function (id) {
        var promise = new Promise(function (resolve, reject) {
            products.getById(id, function (err, dat) {
                if (err) reject(err);
                if (!dat) {
                    reject(new Error('Invalid category id!'));
                } else {
                    products.remove(dat, function (err, done) {
                        if (err) reject(err);

                        resolve(done);
                    });
                };
            });
        });

        return promise;
    }
};
