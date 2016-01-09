var categories = require('../../data/categories');

module.exports = {
    getAll: function () {
        var promise = new Promise(function (resolve, reject) {
            categories.all(function (err, done) {
                if (err) {
                    reject(err);
                };

                resolve(done);
            });
        });

        return promise;
    }
}