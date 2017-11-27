var app=angular.module("app",[]);
  
app.controller("SeguroController",['$scope','$log','$http',function($scope,$log,$http) {

  var config={
    method:"GET",
    url:"localhost/solin/solinRESTfullAPI/public/users"
  }

  var response=$http(config);

  console.log(response);

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
   
  console.log("Acabamos de crear el $scope");
  
}]);