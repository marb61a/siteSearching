var mongoose = require('mongoose');
var searchPlugin = require('mongoose-search-plugin');

// Article Schema
var articleSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	author: {
		type: String
	},
	created_at:{
		type: Date,
		default: Date.now
	}
});