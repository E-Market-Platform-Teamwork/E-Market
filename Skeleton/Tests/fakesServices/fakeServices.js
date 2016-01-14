module.exports = {
    products: {
        getAll: function(){
            return {};
        },
        createProduct: function (product, callback) {
            var createdProduct = {};
            callback(null, createdProduct);
        },
        getLatestProducts: function (callback) {
            var latestProducts = {
                docs: [
                    {
                        id: 1
                    },
                    {
                        id: 2
                    }
                ]
            };

            callback(null, latestProducts);
        }
    }
};