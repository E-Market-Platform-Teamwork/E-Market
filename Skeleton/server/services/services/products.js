var products = require('../../data/products');

module.exports = {
    getAll: function (filterString, page) {
        var promise = new Promise(function (resolve, reject) {
            products.all(filterString, page, function (err, done) {
                if (err) {
                    reject(err);
                }
                ;

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
                }
                ;

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
                    reject(new Error('Invalid product id!'));
                } else {
                    products.remove(dat, function (err, done) {
                        if (err) reject(err);

                        resolve(done);
                    });
                }
                ;
            });
        });

        return promise;
    },
    getById: function (id) {
        var promise = new Promise(function (resolve, reject) {
            products.getById(id, function (err, dat) {
                if (err) reject(err);
                if (!dat) {
                    reject(new Error('Invalid product id!'));
                } else {
                    resolve(dat);
                }


            });
        });

        return promise;
    },
    update: function (id, product) {
        var promise = new Promise(function (resolve, reject) {
            products.update(id, product, function (err, product) {
                if (err) {
                    reject(new Error('Invalid product id!'));
                } else {
                    resolve(product);
                }
            });

        });

        return promise;
    },
    getLatestTen: function () {
        var promise = new Promise(function (resolve, reject) {
            products.getLatestTen(function (err, dat) {
                if (err) reject(err);
                if (!dat) {
                    reject(new Error('Invalid category id!'));
                } else {
                    resolve(dat);
                }
            });
        });

        return promise;
    }
};