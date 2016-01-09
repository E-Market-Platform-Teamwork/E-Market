var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
module.exports.init = function() {
    var productSchema = new Schema({
        name: {type: String, required: true},
        description: {type: String, minlength: 5, maxlength: 500, required: true},
        Price: {type: Number, required: true},
        imageUrl: {type: String, default: ''},
        dateUpdated: {type: Date, default: Date.now},
        quantity: Number
    });
    
    var Product = mongoose.model('Product', productSchema);
};