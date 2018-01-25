'use strict';
 
angular.module('solin').controller('LoginController',['$scope', '$rootScope', '$location', 'authUser', function ($scope, $rootScope, $location, authUser) {
    
    $scope.loginForm = {
        email: 'Aln',//'tony'
        password: '123123'//'123456'
    };

    $scope.login = function(){
        authUser.loginApi($scope.loginForm);
    };
        
}]);