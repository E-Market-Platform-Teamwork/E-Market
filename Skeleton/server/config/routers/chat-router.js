var router = require('express').Router(),
    controllers = require('../../controllers');
    
router
    .get('/', controllers.chat.get)
.get('*', function (req, res) {
    res.render('not-found');
});
module.exports = function (app) {
    app.use('/chat', router);
};