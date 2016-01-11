var Common = require('mongoose').model('Common');

module.exports = {
    create: function (object, callback) {
        Common.create(object, callback);
    },

    findOne: function (obj, callback) {
        Common.findOne(obj, callback);
    },

    update: function (dat, callback) {
        Common.update({ name: 'about' }, {
            name: 'about',
            data: dat
        }, callback);
    }
};