app.controller('userController', function($scope, $cookies, $location, userFactory){
	$scope.user = $cookies.get('cur_user');
	$scope.createUser = function(){
		userFactory.createUser($scope.user);

	}
	$scope.logout = function(){
		$cookies.remove('cur_user');
		$location.url('/index')
	}
})
