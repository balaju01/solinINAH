'use strict';
 
angular.module('solin').controller('HomeController',['$scope', '$rootScope', '$filter', '$location', function ($scope,$rootScope,$filter,$location) {
    $rootScope.date = $filter('date')(new Date(),'yyyy');
    console.log($rootScope.user);
    console.log($scope.date);
    $rootScope.ruta = "http://localhost/solin/laravel5-5/public/api/"
    if ($rootScope.user.rol == 1) {
    	$location.path('/admin');
    };
    if ($rootScope.user.rol != 1) {
    	$location.path('/usuario');
    };
}]);