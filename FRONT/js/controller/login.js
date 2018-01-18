'use strict';
 
angular.module('solin').controller('LoginController',['$scope', '$rootScope', '$location', 'authUser', function ($scope, $rootScope, $location, authUser) {
    
    $scope.loginForm = {
        email: 'tony',//,'Aln'
        password: '123456'//'123123'
    };

    $scope.login = function(){
        authUser.loginApi($scope.loginForm);
    };
        
}]);