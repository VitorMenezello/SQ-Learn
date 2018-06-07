let app = angular.module('App', ['ngMaterial'])

    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('@{').endSymbol('}@');
    })