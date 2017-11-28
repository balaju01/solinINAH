var app = angular.module("solin",[]);
app.controller('AdminController',['$scope','$http',function($scope,$http){
	
	//Datos de conexion
	var req = {
		method: 'GET',
		url: 'http://localhost/solin/solinRESTfullAPI/public/users'
	};

	var response=$http(req);

	response.success(function (data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data;
      
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
}]);