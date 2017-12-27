'use strict';
 
angular.module('solin').controller('UsuarioController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	console.log($rootScope.users.rol);
	$scope.rol = $rootScope.users.rol;
	console.log($scope.rol);

	$scope.solinNuevo = function(){

	};
	$scope.nuevoDepto = function(){
		$location.path('/deptoForm');
	};
	$scope.verDepto = function(){
		$location.path('/depto');
	};
}]);
	