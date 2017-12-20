'use strict';
var app = angular.module("solin",[
    'authService',
    'base64',
    'ngRoute',
    'ngCookies',
    'satellizer'
])
 
.config(['$routeProvider', '$authProvider', function ($routeProvider,$authProvider) {

    $authProvider.loginUrl = 'http://localhost/solin/laravel5-5/public/api/auth_login';

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: './views/login.html',
            hideMenus: true,
            controllerAs: 'login'
        })
 
        .when('/', {
            controller: 'HomeController',
            templateUrl: './views/home.html'
        })

        .when('/admin', {
            controller: 'AdminController',
            templateUrl: './views/admin/admin.html'
        })

        .when('/usuario', {
            controller: 'UsuarioController',
            templateUrl: './views/usuario/usuario.html'
        })

        .when('/adminForm', {
            controller: 'AdminController',
            templateUrl: './views/admin/form.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http', function ($rootScope, $location, $cookieStore, $http, authUser) {
    var rutasPrivadas = ['/', '/admin', '/usuario','/adminForm'];
    $rootScope.$on('$routeChangeStart',function(){
        if(($.inArray($location.path(), rutasPrivadas) !== -1) ){
            //toastr.info('Debe iniciar sesion para continuar.','Mensaje');
            if (!$rootScope.isLoggedIn) {
                console.log('no mames');
                console.log($rootScope.isLoggedIn);
                console.log('Debe iniciar sesion para continuar');
                $location.path('/login');
            }
            
        }
        else{
            if ($rootScope.isLoggedIn) {
                console.log('si se pudo')
            }
        }
    });
}]);