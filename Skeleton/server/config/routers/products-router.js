var router = require('express').Router(),
    controllers = require('../../controllers'),
    multer  = require('multer');

var UPLOAD_PATH = './public/images/products/';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        var fileName = Date.now()+'-'+ file.originalname;
        var fullPath = UPLOAD_PATH + fileName;
        console.log("huhuhuhuhuhuhuhuhuhuhuhuhuhu");
        console.log(fullPath.substring(8));
        req.body.imageUrl = fullPath.substring(8);
        cb(null,fileName );
    }
});
router
    .get('/', controllers.products.get)
    .get('/add', controllers.products.getAddForm),
    .get('/:id', controllers.products.getById);

module.exports = function (app) {
    app.use('/products', router);
};