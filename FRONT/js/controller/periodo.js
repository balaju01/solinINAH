'use strict';
 
angular.module('solin').controller('PeriodoController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	var req = {
		method:"GET",
    	url: $rootScope.ruta+"periodos",	
  	};

  	$scope.item = $rootScope.periodo;

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

	$scope.verPeriodo = function(item){
		$location.path('/periodoForm');
		$rootScope.periodo = item;
	};

	$scope.cancelar = function(){
		$location.path('/periodo');
	};

	$scope.crear = function(){
		req = {
	        method: 'PATCH',
	        url:$rootScope.ruta+"periodos"+"/"+$scope.item.id,
	        
	        data: {
	          inicio: $scope.item.inicio,
	          fin: $scope.item.fin,
	          presupuesto: $scope.item.presupuesto
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/periodo');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          $location.path('/periodoForm');
        });
	};

}]);
