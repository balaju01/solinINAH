var app = angular.module("solin",['base64','ngMaterial']);
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
		req = {
	        method: 'POST',
	        url:"http://localhost/solin/solinRESTfullAPI/public/users",
	        headers: {
	          authorization:"Basic YWRtaW46YWRtaW4="
	        },
	        data: {
	          name: $scope.item.name,
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

	$scope.guardar = function(){

	}

}]);
app.controller('AppCtrl',['$scope','$timeout', '$mdSidenav', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
}]);