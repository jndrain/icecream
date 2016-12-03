var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	content: {type: String, min: 5},
	details: String,
	likes: {type: Number, default: 0},
	answerer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	question: {type: mongoose.Schema.Types.ObjectId, ref: 'Quest'}

})

mongoose.model('Answer', AnswerSchema);