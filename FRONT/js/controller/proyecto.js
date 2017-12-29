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
	//init();


	$scope.abrirForm = function(){
		$location.path('/proyectoForm');
	};

	$scope.crear = function(){
		var req = {
	        method: 'POST',
	        url:$rootScope.ruta+"proyectos",
	        
	        data: {
	          name: $scope.item.name,
	          departamento: $rootScope.depto.id,
	          clave: $scope.item.clave,
	          usuario_id: $rootScope.users.id,
	          saldo: $scope.item.saldo
	        }
	    };
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $scope.response = response;
          //$location.path('/usuario');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          //$location.path('/departamento');
        });
        
        console.log($scope.response.id);
          
        /*

        var req2 = {
        	method: 'POST',
        	url:$rootScope.ruta+"recurso",

        	data: {
        		monto: $scope.item.saldo,
        		usuario_id: $rootScope.users.id,
        		periodo_id: 1,
        		proyecto_id: $scope.data_id
        	}
        };
        $http(req2)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          //$location.path('/usuario');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          //$location.path('/departamento');
        });*/
	};

}]);