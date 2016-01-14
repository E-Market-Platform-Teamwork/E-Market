module.exports = function (services) {
    return {
        getHomePage: function (req, res) {
            services.products.getLatestTen()
                .then(function (products) {
                    console.log(products);
                    res.render('products/products', {products: products});
                }, function (err) {
                    res
                        .status(404)
                        .send(err);
                });
        }
    }
};
