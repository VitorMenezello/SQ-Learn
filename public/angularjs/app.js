let app = angular.module('App', ['ngMaterial'])

    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('@{').endSymbol('}@');
    })

    .controller('IndexController', function ($scope) {
        $scope.amor = 'Marina';
    });