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

        .when('/deptoForm', {
            controller: 'DeptoController',
            templateUrl: './views/departamento/deptoForm.html'
        })
        .when('/depto', {
            controller: 'DeptoController',
            templateUrl: './views/departamento/depto.html'
        })
        .when('/proyectoForm', {
            controller: 'ProyectoController',
            templateUrl: './views/proyecto/formProyecto.html'
        })
        .when('/proyecto', {
            controller: 'ProyectoController',
            templateUrl: './views/proyecto/proyecto.html'
        })
        .when('/periodo', {
            controller: 'PeriodoController',
            templateUrl: './views/periodo/periodo.html'
        })
        .when('/periodoForm', {
            controller: 'PeriodoController',
            templateUrl: './views/periodo/periodoForm.html'
        })

        .when('/solinForm', {
            controller: 'SolinController',
            templateUrl: './views/solin/solin.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http', function ($rootScope, $location, $cookieStore, $http, authUser) {
    var rutasPrivadas = ['/', '/admin', '/usuario','/adminForm','/deptoForm','/depto','/proyectoForm','/proyecto','/periodo','/periodoForm','/solinForm'];
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