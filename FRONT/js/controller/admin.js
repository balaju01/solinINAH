'use strict';
 
angular.module('solin').controller('AdminController',['$scope','$log','$http','$base64',function($scope,$log,$http,$base64) {
	
	//Datos de conexion
	var req = {
		method:"GET",
    	url:"http://localhost/solin/solinRESTfullAPI/public/users",
    	headers: {
    		authorization:"Basic YWRtaW46YWRtaW4="
    		
    
    	}
  	}

  	var req1 = {
		method:"GET",
    	url:"http://localhost/solin/solinRESTfullAPI/public/departamentos",
    	headers: {
    		authorization:"Basic YWRtaW46YWRtaW4="
    		
    
    	}
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
  	};

	var response=$http(req);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data[0];
      console.log($scope.data);
      console.log($base64.encode('admin:admin'));
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});

  	var response=$http(req1);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data1 = data[0];
      console.log($scope.data1);
      console.log($base64.encode('admin:admin'));
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});

	$scope.crear = function(){
		console.log($scope.item.id_departamento);
		console.log($scope.item);
		req = {
	        method: 'POST',
	        url:"http://localhost/solin/solinRESTfullAPI/public/users",
	        headers: {
	          authorization:"Basic YWRtaW46YWRtaW4="
	        },
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

	$scope.update = function(){
		req = {
	        method: 'PATCH',
	        url:"http://localhost/solin/solinRESTfullAPI/public/users/2",
	        headers: {
	          authorization:"Basic YWRtaW46YWRtaW4="
	        },
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

	$scope.delete  = function(){
		req = {
	        method: 'DELETE',
	        url:"http://localhost/solin/solinRESTfullAPI/public/users/9",
	        headers: {
	          authorization:"Basic YWRtaW46YWRtaW4="
	        },
	        data: {
	          
	          
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

}]);
