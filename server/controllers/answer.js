var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Quest = mongoose.model('Quest');

module.exports = (function(){
	return{
		addAnswer: function(req, res){
			var answer = new Answer(req.body);
			answer.save(function(err){
				if(err){
					console.log('error saving answer');
				}
				else{
					res.json(answer);

				}
			}) 
		},
		qAnswers: function(req, res){
			Answer.find({}).populate('question').exec(function(err, quest){
				res.json(quest);
			})
		}

	

}


})();