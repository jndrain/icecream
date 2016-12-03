var mongoose = require('mongoose');
var Quest = mongoose.model('Quest');

module.exports = (function(){
	return{
		newQuest: function(req, res){
			var quest = new Quest(req.body);
			quest.save(function(err){
				if(err){
					console.log('error saving q');
				}
				else{
					res.json(quest);

				}
			})
		},
		allQuest: function(req, res){
			Quest.find({}, function(err, result){
				if(err){
					console.log("error retrieving qs");
				}
				else{
					res.json(result);
				}
			})
		},
		eachQuest: function(req, res){
			Quest.findOne({_id: req.params.questid}, function(err, result){
				if(err){
					console.log('could not find it');
				}
				else{
					res.json(result);
				}
			})
		}
	}
})();