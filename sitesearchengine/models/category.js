var mongoose = require('mongoose');

// Category Schema
var categorySchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	created_at:{
		type: Date,
		default: Date.now
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get Categories
module.exports.getCategories = function(callback, limit){
	Category.find(callback).limit(limit).sort([['title', 'ascending']]);
}