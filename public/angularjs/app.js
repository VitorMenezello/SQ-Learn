let app = angular.module('App', ['ngMaterial', 'ngMdIcons'])

// Avoiding conflicts with blade
.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('@{').endSymbol('}@');
})

// Material Design icons
.config(function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('/third-party/material-design-icons/mdi.svg');
})

.controller('MenuController', function($scope, $window){
    $scope.currentPage = $window.location.href.split('/').pop();
});