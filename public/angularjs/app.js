let app = angular.module('App', ['ngMaterial', 'ngMessages', 'ngMdIcons'])

// Avoiding conflicts with blade
.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('@{').endSymbol('}@');

    //$locationProvider.html5Mode(true);

    //$routeProvider
    //    .when('/', {
    //        templateUrl : 'app/views/home.html',
    //        controller  : 'HomeCtrl',
    //    })
    //    .when('/sobre', {
    //        templateUrl : 'app/views/sobre.html',
    //        controller  : 'SobreCtrl',
    //    })
    //    .when('/contato', {
    //        templateUrl : 'app/views/contato.html',
    //        controller  : 'ContatoCtrl',
    //    })
    //    .otherwise ({ redirectTo: '/' });
})

.controller('MenuController', function($scope, $window){
    $scope.currentPage = $window.location.href.split('/').pop();
});