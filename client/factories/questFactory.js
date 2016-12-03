app.factory('questionFactory', function($http, $location){
	var factory = {};
	factory.newQuest = function(quest){
		$http.post('/newquest', quest).then(function(returndata){
			if(returndata){
			$location.url('/')
			}
			else{
				console.log("couldn't return quest data")
			}
		})
	}
	factory.allQuest = function(cb){
		$http.get('/quests').then(function(questions){
			cb(questions.data);
		})
	}

	return factory;
})