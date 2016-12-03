app.factory('userFactory', function($http, $cookies, $location){
	var factory = {};

	factory.createUser = function(user){
		$http.post('/create', user).then(function(returndata){
			if(returndata.data){
				$cookies.put('cur_user', returndata.data.name);
				$location.url('/')
			}
			else{
				alert("Something went wrong. Please try again.")
			}
		})
	}


	return factory;
})