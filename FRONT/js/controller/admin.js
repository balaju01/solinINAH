'use strict';
 
angular.module('solin').controller('AdminController',['$scope','$log','$http','$base64','$rootScope',function($scope,$log,$http,$base64,$rootScope) {
	
	//Datos de conexion
	var req = {
		method:"GET",
    	url: $rootScope.ruta+"users",
    	
  	}

  	var req1 = {
		method:"GET",
    	url: $rootScope.ruta+"departamentos",
    	
  	}

  	$scope.item = {
  		id: "",
  		name: {
  			n: "",
  			p: "",
  			m: ""
  		},
  		id_departamento: 0,
  		departamento: "",
  		email: "",
  		password: "",
  		rol: ""
  	};
  	//peticion para recuperar todos los usuarios
	var response=$http(req);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data[0];
      console.log($scope.data);
      
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});
    //peticion para recuperar todos los departamentos
  	var response=$http(req1);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data1 = data[0];
      console.log($scope.data1);
      
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});
    //funcion para crear nuevo usuario
	$scope.crear = function(){
		console.log($scope.item.id_departamento);
		console.log($scope.item);
		req = {
	        method: 'POST',
	        url:$rootScope.ruta+"users",
	        
	        data: {
	          name: $scope.item.name.n+" "+$scope.item.name.p+" "+$scope.item.name.m,
	          departamento_id: $scope.item.id_departamento,
	          email: $scope.item.email,
	          password: $scope.item.password
	          
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
        });
	};
	//Funcion para actualizar un usuario
	$scope.update = function(){
		req = {
	        method: 'PATCH',
	        url:$rootScope.ruta+"users/"+,
	        
	        data: {
	          name: $scope.item.name.n+" "+$scope.item.name.p+" "+$scope.item.name.m,
	          departamento_id: $scope.item.id_departamento,
	          email: $scope.item.email,
	          password: $scope.item.password
	          
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
        });
	};
	//Funcion para eliminar usuarios
	$scope.delete  = function(){
		req = {
	        method: 'DELETE',
	        url:$rootScope.ruta+"users/"+,
	       
	        
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
        });
	};

}]);
