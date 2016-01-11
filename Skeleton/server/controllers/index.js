var UsersController = require('./UsersController');

module.exports = {
    users: UsersController,
    categories: require('./CategoriesController'),
    
    about: require('./AboutController')
};