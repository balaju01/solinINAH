'use strict'

angular.module('apiFrontApp').controller('MenuCtrl', function(authUser,$location,$rootScope) {

	$scope.isLogin = authUser.isLoggedIn();

	$scope.$watch(function(){
		return authUser.isLoggedIn();
	}, function(newVal){
		if(typeof newVal !== 'undefined'){
			$scope.isLogin = authUser.isLoggedIn();
		}
	});

	$scope.user = $rootScope.user;

	$scope.$watch(function(){
		return $rootScope.user.email;
	}, function (newVal){
		if(typeof newVal !== 'undefined'){
			$scope.user.email = $rootScope.user.email;
		}
	});

	$scope.logout = function(){
		authUser.logout();
	};

	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};

});