'use strict';
 
angular.module('solin').controller('ProyectoController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	
	var req = {
		method:"GET",
    	url: $rootScope.ruta+"proyectos/periodo/"+$rootScope.date.id+"/departamento/"+$rootScope.depto.id,	
  	};
  	//console.log($rootScope.ruta+"proyectos/periodo/"+$rootScope.date.id+"/departamento/"+$rootScope.depto.id);
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
	$scope.formOption = $rootScope.option;

	$scope.abrirForm = function(option,item){
		$location.path('/proyectoForm');

		$rootScope.option = option;
		console.log(option);
		console.log(item);
		if(option == 1){
			$rootScope.item = "";
			$scope.item = "";
		}
		else{
			item.saldo = item.saldoProyecto;
			item.clave = item.claveProyecto;
			item.name = item.nameProyecto;
			$rootScope.item = item;
			$scope.item = item;
		};
		
		console.log($scope.item);
	};

	$scope.crear = function(){
		$scope.response = "";
		var recurso = function(){

	        var req2 = {
	        	method: 'POST',
	        	url:$rootScope.ruta+"recurso",

	        	data: {
	        		monto: $scope.item.saldo,
	        		usuario_id: $rootScope.users.id,
	        		periodo_id: $rootScope.date.id,
	        		proyecto_id: $scope.response.id
	        	}
	        };
	        $http(req2)
	        .success(function (response) {//'response' es el objeto que devuelve el servicio web
	          console.log(response);
	          $location.path('/proyecto');
	          
	        })
	        .error(function (response){
	          console.log(response);
	          alert("Ha fallado la petición. Estado HTTP:"+status);
	          //$location.path('/departamento');
	        });
	    };

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
          console.log(response[0]);
          $scope.response = response[0];
          //$location.path('/usuario');
          console.log($scope.response);
          recurso();
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          //$location.path('/departamento');
        });
        
        
	};

	$scope.update = function(){
		$scope.item = $rootScope.item;

		req = {
	        method: 'PATCH',
	        url:$rootScope.ruta+"proyectos/"+$scope.item.proyecto_id,
	        
	        data: {
	          name: $scope.item.name,
	          departamento: $rootScope.depto.id,
	          clave: $scope.item.clave,
	          usuario_id: $rootScope.users.id,
	          saldo: $scope.item.saldo,
	          monto: $scope.item.montoAsignado
	          
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/proyecto');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          $location.path('/admin');
        });
	};

}]);