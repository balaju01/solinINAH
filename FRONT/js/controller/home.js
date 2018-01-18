'use strict';
 
angular.module('solin').controller('HomeController',['$scope', '$rootScope', '$filter', '$location', '$http', function ($scope,$rootScope,$filter,$location,$http) {
    $rootScope.monto = [0,0,0,0,0,0,0,0,0,0,0];
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
            recursos();
            $location.path('/usuario');
        };
          
    });
    response.error(function(data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:"+status);
    });

    var recursos = function()
    {
        if ($rootScope.users.rol == 3) 
        {
            console.log($rootScope.date.id);
            for (var i = 0; i < $rootScope.date.id; i++) {        
                var req1 = {
                    method:"GET",
                    url: $rootScope.ruta+"recurso/periodo/"+(i+1)
                };
                
                var response=$http(req1);

                response.success(function(data, status, headers, config) {//'response' es el objeto que devuelve el servicio web
                    //$rootScope.date = data[0][0];
                    console.log($rootScope.ruta+"recurso/periodo/"+(i+1));
                    console.log(data[0]);
                    var aux = 0;
                    for (var j = 0; j < data[0].length; j++) {
                        //console.log(data[0][i].monto);
                        aux = aux + data[0][j].monto
                    }
                    $rootScope.monto[data[0][0].periodo_id]=aux;
                    console.log($rootScope.monto);
                });
                response.error(function(data, status, headers, config) {
                    alert("Ha fallado la petición. Estado HTTP:"+status);
                });
            }
        }
    };
    
}]);