var Product = require('mongoose').model('Product');

module.exports = {
  create: function(product, callback) {
      Product.create(user, callback);
  }  
};