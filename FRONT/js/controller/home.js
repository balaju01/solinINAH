'use strict';
 
angular.module('solin')
 
.controller('HomeController',['$scope', '$rootScope', function ($scope,$rootScope) {
      console.log($rootScope.user);
    }]);