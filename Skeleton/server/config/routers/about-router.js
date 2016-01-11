var router = require('express').Router(),
    controllers = require('../../controllers');

router
<<<<<<< HEAD
    //.get('/', controllers.about.get)
    //.post('', controllers.about.add)
=======
    .get('/', controllers.about.getAbout)
    .get('/edit', controllers.about.getEdit)
    .post('/', controllers.about.edit)
    .post('/uploadImage', controllers.about.uploadImage)
>>>>>>> refs/remotes/origin/master

module.exports = function (app) {
    app.use('/about', router);
}