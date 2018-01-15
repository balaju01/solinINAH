'use strict';
 
angular.module('solin').controller('UsuarioController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	console.log($rootScope.users.rol);
	$scope.rol = $rootScope.users.rol;
	console.log($scope.rol);
	console.log($rootScope.date)

	var req = {
		method:"GET",
    	url: $rootScope.ruta+"solins/departamento/"+$rootScope.users.departamento_id+"/periodo/"+$rootScope.date.id+"/estado/0",
    	
  	}

  	var req1 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/periodo/"+$rootScope.date.id+"/estado/0",
    	
  	}

	var init = function(){
		if ($scope.rol == 2){
			var response=$http(req);

			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data = data[0];
		      console.log($scope.data);
		      $rootScope.solines = $scope.data.length
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});
	  	}
	  	else
	  	{
	  		var response=$http(req1);

			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data = data[0];
		      console.log($scope.data);
		      $rootScope.solines = $scope.data.length
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});
	  	}
	};

	init();

	$scope.solinNuevo = function(){
		$rootScope.solin = {opcion: 1};
		$location.path('/solinForm');
	};

	$scope.editarSolin = function(item){
		$rootScope.solin = item;
		$rootScope.solin.opcion = 2;
		$location.path('/solinForm');
	};

	$scope.nuevoDepto = function(){
		$location.path('/deptoForm');
	};
	$scope.verDepto = function(){
		$location.path('/depto');
	};

	$scope.proyectoNuevo = function(){
		$location.path('/proyectoForm');
	};

	$scope.verPeriodo = function(){
		$location.path('/periodo');
	};
}]);
	