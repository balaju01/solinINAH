'use strict';
 
angular.module('solin').controller('ProyectoController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	var req = {
		method:"GET",
    	url: $rootScope.ruta+"proyectos/periodo/"+$rootScope.date+"/departamento/"+$rootScope.depto.id,	
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
	};
	init();

	$scope.abrirForm = function(){
		$location.path('/proyectoForm');
	};

	$scope.crear = function(){
		req = {
	        method: 'POST',
	        url:$rootScope.ruta+"proyectos",
	        
	        data: {
	          name: $scope.item.name,
	          saldo: $scope.item.saldo,
	          clave: $scope.item.clave,
	          usuario_id: $rootScope.depto.id
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          //$location.path('/usuario');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          $location.path('/departamento');
        });
	};

}]);