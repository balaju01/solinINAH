'use strict';
 
angular.module('solin').controller('DeptoController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	var req = {
		method:"GET",
    	url: $rootScope.ruta+"departamentos",	
  	};
  	//peticion para recuperar todos los departamentos
	var init = function(){
		var response=$http(req);

		response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
	      $scope.data = data[0];
	      console.log($scope.data);
	      
	    });
	    response.error(function(data, status, headers, config) {
	      alert("Ha fallado la petición. Estado HTTP:"+status);
	  	});
	}
	init();

	$scope.crear = function(){
		req = {
	        method: 'POST',
	        url:$rootScope.ruta+"departamentos",
	        
	        data: {
	          name: $scope.item.name,
	          seudonimo: $scope.item.seudonimo
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          $location.path('/');
        });
	};
	$scope.cancelar = function(){
		$location.path('/');
	};

	$scope.verProyectos = function(item){
		$rootScope.depto = item;
		$location.path('/proyecto');
	};
}]);