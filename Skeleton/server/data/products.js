var Product = require('mongoose').model('Product');
const PROJECTS_PER_PAGE = 6;
module.exports = {
    create: function (product, callback) {
        Product.create(product, callback);
    },
    all: function (filterString, page, callback) {
        var skip = PROJECTS_PER_PAGE * (page - 1);
        Product
            .find({'name': new RegExp('.*' + filterString + '.*', 'i')},{},{limit: PROJECTS_PER_PAGE, skip: skip})
            .populate('categories')
            .exec(function (err, done) {
                if (err) {
                    return callback(err);
                }
                Product.count({}, function(err, count){
                    done.totalPages = ((count/PROJECTS_PER_PAGE)|0) + 1;
                    callback(null, done);
                });

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