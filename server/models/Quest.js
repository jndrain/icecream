var mongoose = require('mongoose');

var QuestSchema = new mongoose.Schema({
	title: {type: String, min: 10},
	desc: String,
	responses: {type: Number, default: 0},
	answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}],
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

mongoose.model('Quest', QuestSchema)