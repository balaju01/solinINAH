var app=angular.module("app",[]);
   
app.controller("PruebaController",['$scope','$timeout',function($scope,$timeout) {
  $scope.producidoEvento="NO";
   
  $timeout(function() {
    $scope.producidoEvento="SIIIIII";
  },3000);

  $scope.provincias=[
    {
      idProvincia:2,
      nombre:"Castellón"
    },
    {
      idProvincia:3,
      nombre:"Alicante"
    },
    {
      idProvincia:1,
      nombre:"Valencia"
    },
    {
      idProvincia:7,
      nombre:"Teruel"
    },  
    {
      idProvincia:5,
      nombre:"Tarragona"
    },      
  ];

  $scope.miProvinciaSeleccionada=null

  $scope.nombre="Carlos";
  $scope.showNombre=true;
   
  $scope.modelo={
    apellido:"Perez",
    showApellido:true 
  }
   
}]);