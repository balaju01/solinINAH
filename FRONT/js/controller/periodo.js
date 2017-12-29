'use strict';
 
angular.module('solin').controller('PeriodoController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	var req = {
		method:"GET",
    	url: $rootScope.ruta+"periodos",	
  	};

	var init = function(){
		var response=$http(req);

		response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
	      $scope.data = data[0];
	      console.log($scope.data);
	      
	    });
	    response.error(function(data, status, headers, config) {
	      alert("Ha fallado la petición. Estado HTTP:"+status);
	  	});
	};
	init();
}]);
