'use strict';
 
angular.module('solin').controller('AdminController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	
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
  		names: "",
  		id_departamento: 0,
  		departamento: "",
  		email: "",
  		password: "",
  		rol: ""
  	};
  	$scope.item = $rootScope.item;
  	$scope.formOption = $rootScope.option;

  	//peticion para recuperar todos los usuarios
	var response=$http(req);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data[0];
      //console.log($scope.data);
      
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});
    //peticion para recuperar todos los departamentos
  	var response=$http(req1);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data1 = data[0];
      //console.log($scope.data1);
      
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});


  	

    //funcion para crear nuevo usuario
    $scope.abrirForm = function(option,item){
    	$location.path('/adminForm');
		$rootScope.option = option;
		console.log(option);
		console.log(item);
		if(option == 1){
			$rootScope.item = "";
			$scope.item = "";
		}
		else{
			$rootScope.item = item;
			$scope.item = item;
		};
		
		console.log($scope.item);
    };

	$scope.crear = function(){
		console.log($scope.item.id_departamento);
		console.log($rootScope.item);

		/*if ($scope.item.id_departamento != 1) {
			$scope.item.rol = 2;
		};
		
		req = {
	        method: 'POST',
	        url:$rootScope.ruta+"users",
	        
	        data: {
	          name: $scope.item.name.n+" "+$scope.item.name.p+" "+$scope.item.name.m,
	          departamento_id: $scope.item.departamento_id,
	          email: $scope.item.email,
	          password: $scope.item.password,
	          rol: $scope.item.rol
	        }
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/admin');
          
        })
        .error(function (response){
          console.log(response);
          alert("Ha fallado la petición. Estado HTTP:"+status);
          $location.path('/admin');
        });*/
	};
	//Funcion para actualizar un usuario
	$scope.update = function(){
		req = {
	        method: 'PATCH',
	        url:$rootScope.ruta+"users/"+$scope.item.id,
	        
	        data: {
	          name: $scope.item.name,
	          departamento_id: $scope.item.departamento_id,
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
	        url:$rootScope.ruta+"users/"+1,
	       
	        
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
