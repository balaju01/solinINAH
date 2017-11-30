var app = angular.module("solin",['base64']);
app.controller('AdminController',['$scope','$log','$http','$base64',function($scope,$log,$http,$base64) {
	
	//Datos de conexion
	var req = {
		method:"GET",
    	url:"http://localhost/solin/solinRESTfullAPI/public/users",
    	headers: {
    		authorization:"Basic YWRtaW46YWRtaW4="
    		
    
    	}
  	}

  	$scope.item = {
  		id: "",
  		name: "",
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

	$scope.crear = function(){
		console.log("si esta entrando");
		var item = {

		};
		$scope.item = item;
	};

	$scope.guardar = function(){

	}

}]);