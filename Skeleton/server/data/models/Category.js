var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

module.exports.init = function () {
    var categorySchema = new Schema({
        name: { type: String, minlength: 2, maxlength: 25, required: true },
        description: { type: String, minlength: 5, maxlength: 200 },
        products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    });

    var Category = mongoose.model('Category', categorySchema);
};