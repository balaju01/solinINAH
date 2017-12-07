app.controller('SolinController',['$scope','$log','$http','$base64',function($scope,$log,$http,$base64) {
	$scope.item = {
      id: "",
      folio: "",
      proyecto_id: "",
      usuario_cr_id: "",
      usuario_c_id: "",
      usuario_a_id: "",
      periodo_id: "",
      monto: "",
      montoL: "",
      descripcion: "",
      pago: "",
      n_pago: "",
      status: "",
      user: "",
      cargo: "",
      comprobante: "",
      comprobantes: {}
    };

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

  $scope.crear = function(){
    req = {
          method: 'POST',
          url:"http://localhost/solin/solinRESTfullAPI/public/users/2/solins",
          headers: {
            authorization:"Basic YWRtaW46YWRtaW4="
          },
          data: {
            folio: "DepInf-2017-3",
            proyecto_id: $scope.item.proyecto_id,
            usuario_cr_id: 2,
            usuario_c_id: 1,
            usuario_a_id: 1,
            periodo_id: 2,
            monto: $scope.item.monto,
            descripcion: $scope.item.descripcion,
            pago: $scope.item.pago,
            n_pago: $scope.item.n_pago,
            status: 0            
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
    console.log($scope.item);

  };

}]);