var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/index', {
		templateUrl: "partials/login.html"
	})
	.when('/', {
		templateUrl: "partials/dash.html"
	})
	.when('/new_question', {
		templateUrl: "partials/quest.html"
	})
	.when('/question/:id', {
		templateUrl: "partials/show.html"
	})
	.when('/question/:id/new_answer', {
		templateUrl: "partials/answer.html"
	})
	.otherwise({
		redirectTo: "/index"
	})
})