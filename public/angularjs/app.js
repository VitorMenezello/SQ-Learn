let app = angular.module('App', ['ngMaterial', 'ngMessages', 'ngMdIcons'])

// Avoiding conflicts with blade
.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('@{').endSymbol('}@');
})

.controller('MenuController', function($scope, $window){
    $scope.currentPage = $window.location.href.split('/').pop();
});