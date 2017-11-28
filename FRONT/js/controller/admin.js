var app = angular.module("solin",[]);
app.controller('AdminController',['$scope','$log','$http',function($scope,$log,$http) {
	
	//Datos de conexion
	var req = {
		method:"GET",
    	url:"http://localhost/solin/solinRESTfullAPI/public/users"
  	}

  	$scope.item = {
  		name:
  		departamento_id:
  		departamento:
  		email:
  		password:
  	}

	var response=$http(req);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data[0];
      console.log($scope.data);
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});

	$scope.crear = function(){
		var item = {

		};
		$scope.item = item;
	};

	$scope.guardar = function(){

	}

}]);