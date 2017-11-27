var app=angular.module("app",[]);
  
app.controller("SeguroController",['$scope','$log','$http',function($scope,$log,$http) {

  $scope.seguro={
    nif:"",
    nombre:"",
    ape1:"",
    edad:undefined,
    sexo:"",
    casado:false,
    numHijos:undefined,
    embarazada:false,
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  }

  var config={
    method:"GET",
    url:"./datos.json"
  }

  var response=$http(config);

  response.success(function(data, status, headers, config) {
      $scope.seguro=data;
  });
  
  response.error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });

  console.log(response);

  
   
  console.log("Acabamos de crear el $scope");
  
}]);