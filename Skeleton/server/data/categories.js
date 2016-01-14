var Category = require('mongoose').model('Category');

module.exports = {
    create: function (order, callback) {
        Category.create(order, callback);
    },

    remove: function (category, callback) {
        category.remove(function (err, done) {
            if (err) return callback(err);

            return callback(null, done);
        });
    },
    all: function (callback) {
        Category
            .find()
            .populate('products')
            .exec(function (err, done) {
                if (err) {
                    return callback(err);
                }
                ;

                callback(null, done);
            });
    },
    getById: function (id, callback) {
        Category.findOne({_id: id}, function (err, done) {
            if (err) return callback(err);

            return callback(null, done);
        });
    },
    update: function (id, category, callback) {
        console.log(category);
        Category.update({_id: id}, category, callback);
    },
    getProductsByCategoryId: function (id, page, sortByPrice, sortByDate, callback) {
        page = page || 1;
        const PROJECTS_PER_PAGE = 6;
        var skip = PROJECTS_PER_PAGE * (page - 1);
        var sortObj = {};


        if(sortByPrice) sortObj['price'] = sortByPrice;
        if(sortByDate) sortObj['dateUpdated'] =sortByDate;

        Category.findOne({_id: id})
            .populate(
            {
                path: 'products',
                options: {limit: PROJECTS_PER_PAGE, skip: skip, sort: sortObj}
            })
            .exec(function (err, done) {
                if (err) {
                    callback(err);
                } else {
                    Category.findOne({_id: id}).exec(function (err, result) {
                        done.totalPages = ((result.products.length / PROJECTS_PER_PAGE)|0) + 1;
                        callback(null, done);
                    })

                }
            });
    }
};