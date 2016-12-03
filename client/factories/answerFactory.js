app.factory('answerFactory', function($http, $location){
	var factory = {};
	
	factory.eachQuest = function(questid, cb){
		$http.get('/question/' + questid).then(function(returndata){
			cb(returndata.data);
		})
	}
	factory.addAnswer = function(answer){
		$http.post('/addanswer', answer).then(function(returndata){
			if(returndata){
			$location.url('/')
			}
			else{
				console.log("couldn't return answer data")
			}
		})
	}
	factory.qAnswers = function(questid, cb){
		$http.get('/answers/' + questid).then(function(answers){
			cb(answers);
		})
	}
	return factory;
})