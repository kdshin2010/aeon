var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var TaskSchema = new mongoose.Schema({
	name: String,
	priority: String,
	deadline: Date,
	created: Date
})



module.exports = mongoose.model('Task', TaskSchema)
