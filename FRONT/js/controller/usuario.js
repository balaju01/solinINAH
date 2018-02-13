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

  	var req7 = {
  		method:"GET",
    	url: $rootScope.ruta+"solins/contar/departamento/"+$rootScope.users.departamento_id+"/periodo/"+$rootScope.date.id,
  	}

	var init = function(){
		$rootScope.solines = 0;
		if ($scope.rol == 2){
			var response=$http(req1);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data = data[0];
		      console.log($scope.data);
		      alertify.error('No hay Solines sin Confirmar');
		      
		    });
		    response.error(function(data, status, headers, config) {
		      
		      alertify.error('No hay Solines sin Confirmar');
		  	});

		  	var response=$http(req2);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data1 = data[0];
		      console.log($scope.data1);
		      
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req3);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data2 = data[0];
		      console.log($scope.data2);
		      
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req7);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data3 = data[0];
		      console.log($scope.data3);
		      $rootScope.solines = $scope.data3;
		      
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
		      console.log($scope.data1);
		      
		      
		    });
		    response.error(function(data, status, headers, config) {
		      alert("Ha fallado la petición. Estado HTTP:"+status);
		  	});

		  	var response=$http(req6);
			response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
		      $scope.data2 = data[0];
		      console.log($scope.data2);
		      
		      
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
			console.log(item);
			for (var i = 0; i < $rootScope.proyectos.length; i++) {
		      if ($rootScope.proyectos[i].proyecto_id == item.proyecto_id) 
		      {
		        console.log($rootScope.proyectos[i]);
		        $scope.saldoActual = $rootScope.proyectos[i].saldoProyecto;
		        console.log($scope.saldoActual);
		      }
		    }

		    var req1 = {
	            method: 'PATCH',
	            url:$rootScope.ruta+"proyectos/"+item.proyecto_id,
	            
	            data: {
	              
	              saldo: ($scope.saldoActual + item.monto)
	              
	            }
	        }
	        $http(req1)
	          .success(function (response) {//'response' es el objeto que devuelve el servicio web
	            console.log(response);
	            //$location.path('/proyecto');
	            
	          })
	          .error(function (response){
	            console.log(response);
	            alert("Ha fallado la petición. Estado HTTP:"+status);
	            $location.path('/');
	          });

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
		console.log(item);
		for (var i = 0; i < $rootScope.proyectos.length; i++) {
	      if ($rootScope.proyectos[i].proyecto_id == item.proyecto_id) 
	      {
	        console.log($rootScope.proyectos[i]);
	        $scope.saldoActual = $rootScope.proyectos[i].saldoProyecto;
	        console.log($scope.saldoActual);
	      }
	    }

		var req = {
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

        var req1 = {
            method: 'PATCH',
            url:$rootScope.ruta+"proyectos/"+item.proyecto_id,
            
            data: {
              
              saldo: ($scope.saldoActual + item.monto)
              
            }
        }
        $http(req1)
          .success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            //$location.path('/proyecto');
            
          })
          .error(function (response){
            console.log(response);
            alert("Ha fallado la petición. Estado HTTP:"+status);
            $location.path('/');
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
	