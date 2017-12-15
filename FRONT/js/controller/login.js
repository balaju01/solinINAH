'use strict';
 
angular.module('solin').controller('LoginController',['$scope', '$rootScope', '$location', 'authUser', function ($scope, $rootScope, $location, authUser) {
    
    $scope.loginForm = {
        email: '',
        password: ''
    };

    $scope.login = function(){
        authUser.loginApi($scope.loginForm);
    };
        /*
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };*/
    }]);