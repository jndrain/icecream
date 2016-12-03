app.controller('questionController', function($scope, questionFactory){
	$scope.newQuest = function(){
		questionFactory.newQuest($scope.quest);
		console.log($scope.quest)
	}
	questionFactory.allQuest(function(returndata){
		$scope.questions = returndata;
	})
})