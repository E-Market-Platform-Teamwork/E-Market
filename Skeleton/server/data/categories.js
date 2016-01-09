var Category = require('mongoose').model('Category');

module.exports = {
    create: function(order, callback) {
        Category.create(order, callback);
    }
};