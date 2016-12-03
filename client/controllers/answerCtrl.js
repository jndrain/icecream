app.controller('answerController', function($scope, $routeParams, answerFactory){
	answerFactory.eachQuest($routeParams.id, function(returndata){
		$scope.eachquest = returndata;
	});
	$scope.addAnswer = function(){
		answerFactory.addAnswer($scope.answer);
	}
	answerFactory.qAnswers($routeParams.id, function(returndata){
		$scope.answers = returndata.data;
		console.log($scope.answers)
	});
	
})