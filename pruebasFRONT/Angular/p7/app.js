var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('DemoListadoCtrl', ['$scope', '$http', function ($scope, $http) {
    function cargarData() {
        $http.get('http://jsonplaceholder.typicode.com/posts').then(function (r) {
            $scope.model = r.data;
        })
    }

    cargarData();

    $scope.registrar = function () {
        var data = {
            title: $scope.title,
            body: $scope.body,
            userId: 1
        };

        $http.post('http://jsonplaceholder.typicode.com/posts', data).then(function (r) {
            //cargarData();
            
            $scope.title = null;
            $scope.body = null;
        })
    }

    $scope.retirar = function (id) {
        if (confirm('¿Estas seguro de eliminar esta publicación?')) {
            $http.delete('http://jsonplaceholder.typicode.com/posts/' + id).then(function (r) {
                //cargarData();
            })
        }
    }
}]);

demoControllers.controller('DemoVerCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('http://jsonplaceholder.typicode.com/posts/' + $routeParams.id).then(function (r) {
        $scope.model = r.data;
    })
}]);