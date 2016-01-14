var UsersController = require('./UsersController');
var services = require('../services'),
    encryption = require('../utilities/encryption'),
    users = require('../data/users');

    module
    .exports = {
    users: UsersController(encryption,users),
    categories: require('./CategoriesController')(services),
    products: require('./ProductsController')(services),
    about: require('./AboutController')(services),
    home: require('./HomeController')(services),
    chat: require('./ChatController')
};