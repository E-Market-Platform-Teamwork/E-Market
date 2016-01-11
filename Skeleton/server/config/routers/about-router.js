var router = require('express').Router(),
    controllers = require('../../controllers');

router
    .get('/', controllers.about.getAbout)
    .get('/edit', controllers.about.getEdit)
    .post('/', controllers.about.edit)
    .post('/uploadImage', controllers.about.uploadImage)

module.exports = function (app) {
    app.use('/about', router);
}