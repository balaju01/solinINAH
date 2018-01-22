'use strict';
 
angular.module('solin').controller('UsuarioController',['$scope','$log','$http','$base64','$rootScope','$location',function($scope,$log,$http,$base64,$rootScope,$location) {
	console.log($rootScope.users.rol);
	$scope.rol = $rootScope.users.rol;
	console.log($scope.rol);
	console.log($rootScope.date)

	var req1 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/departamento/"+$rootScope.users.departamento_id+"/periodo/"+$rootScope.date.id+"/estado/0",
  	}
  	var req2 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/departamento/"+$rootScope.users.departamento_id+"/periodo/"+$rootScope.date.id+"/estado/1",
  	}
  	var req3 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/departamento/"+$rootScope.users.departamento_id+"/periodo/"+$rootScope.date.id+"/estado/2",
  	}

  	var req4 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/periodo/"+$rootScope.date.id+"/estado/0",
  	}
  	var req5 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/periodo/"+$rootScope.date.id+"/estado/1",
  	}
  	var req6 = {
		method:"GET",
    	url: $rootScope.ruta+"solins/periodo/"+$rootScope.date.id+"/estado/2",
  	}

	var init = function(){
		$rootScope.solines = 0;
		if ($scope.rol == 2){
			var response=$http(req1);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data = data[0];
		      console.log($scope.data);
		      $rootScope.solines = $rootScope.solines + $scope.data.length;
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req2);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data1 = data[0];
		      console.log($scope.data);
		      $rootScope.solines = $rootScope.solines + $scope.data.length;
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req3);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data2 = data[0];
		      console.log($scope.data);
		      $rootScope.solines = $rootScope.solines + $scope.data.length;
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});
	  	}
	  	else
	  	{
	  		var response=$http(req4);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data = data[0];
		      console.log($scope.data);
		      
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req5);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data1 = data[0];
		      console.log($scope.data);
		      
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req6);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data2 = data[0];
		      console.log($scope.data);
		      
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});
	  	}
	};

	init();

	$scope.cambiarEstado = function(item,op)
	{
		console.log(item);
		console.log(op);
		if (op == 1) 
		{
			var req = {
	          method: 'PATCH',
	          url:$rootScope.ruta+"solins/"+item.id,
	          
	          data: {
	            usuario_a_id: $rootScope.users.id,
	            status: 1
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
		}
		else if (op == 2) 
		{
			var req = {
	          method: 'PATCH',
	          url:$rootScope.ruta+"solins/"+item.id,
	          
	          data: {
	            usuario_a_id: $rootScope.users.id,
	            status: 3
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
		}
		else if (op == 3) 
		{
			var req = {
	          method: 'PATCH',
	          url:$rootScope.ruta+"solins/"+item.id,
	          
	          data: {
	            usuario_cr_id: $rootScope.users.id,
	            status: 2
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
		}
	};

	$scope.eliminar = function(item)
	{
		req = {
	        method: 'DELETE',
	        url:$rootScope.ruta+"solins/"+item.id,
	       
	        
	    }
	    $http(req)
        .success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $location.path('/');
        })
        .error(function (response){
          console.log(response);
          
          alert("Ha fallado la petición. Estado HTTP:"+status);

        });
	};

	$scope.recursosDepto = function(){
		$location.path('/proyecto');
	};

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
	