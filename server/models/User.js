var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quest'}],
	answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]

})

mongoose.model('User', UserSchema)