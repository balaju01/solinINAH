'use strict';
 
angular.module('solin').controller('HomeController',['$scope', '$rootScope', '$filter', '$location', '$http', function ($scope,$rootScope,$filter,$location,$http) {
    
    console.log($rootScope.users);
    console.log($scope.date);
    $rootScope.ruta = "http://localhost/solin/laravel5-5/public/api/";
    $scope.aux = "Periodo_"+$filter('date')(new Date(),'yyyy');
    console.log($scope.aux);
    var req = {
        method:"GET",
        url: $rootScope.ruta+"periodo/"+$scope.aux    
    };

    var response=$http(req);

    response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
        $rootScope.date = data[0][0];
        console.log($rootScope.date);

        if ($rootScope.users.rol == 1) {
        $location.path('/admin');
        };
        if ($rootScope.users.rol != 1) {
            $location.path('/usuario');
        };
          
    });
    response.error(function(data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:"+status);
    });

    

    
}]);