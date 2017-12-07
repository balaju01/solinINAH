app.controller('SolinController',['$scope','$log','$http','$base64',function($scope,$log,$http,$base64) {
	var req = {
		method:"GET",
    	url:"http://localhost/solin/solinRESTfullAPI/public/proyectos",
    	headers: {
    		authorization:"Basic YWRtaW46YWRtaW4="
    		
    
    	}
  	}

  	var response=$http(req);

	response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
      $scope.data = data[0];
      console.log($scope.data);
      console.log($base64.encode('admin:admin'));
    });
    response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  	});

  	

}]);