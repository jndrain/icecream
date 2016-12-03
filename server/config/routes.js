var user = require('./../controllers/user.js');
var quest = require('./../controllers/quest.js');
var answer = require('./../controllers/answer.js');

module.exports = function(app){
	app.post('/create', function(req, res){
		user.createUser(req, res);
	})
	app.post('/newquest', function(req, res){
		quest.newQuest(req, res);
	})
	app.get('/quests', function(req, res){
		quest.allQuest(req, res);
	})
	app.get('/question/:questid', function(req, res){
		quest.eachQuest(req, res);
	})
	app.post('/addanswer', function(req, res){
		answer.addAnswer(req, res);
	})
	app.get('/answers/:questid', function(req, res){
		answer.qAnswers(req, res);
	})
}