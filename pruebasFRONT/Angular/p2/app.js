var app=angular.module("app",[]);
  
app.controller("PruebaController",function($scope) {
  $scope.mensaje="Hola Mundo";
   
  $scope.cambiarMensaje=function() {
    $scope.mensaje="Adios mundo cruel :-)";
  }
   
});
