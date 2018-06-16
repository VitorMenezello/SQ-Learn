let app = angular.module('App', ['ngMaterial', 'ngMdIcons'])

// Avoiding conflicts with blade
.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('@{').endSymbol('}@');
})

.controller('MenuController', function($scope, $window){
    $scope.currentPage = $window.location.href.split('/').pop();

    $scope.pageNameMap = {
        'tutorial': "Tutorial",
        'praticando': "Praticando",
        'sq-look': "SQ-Look"
    };

    $scope.pageName = function () {
        return $scope.pageNameMap[$scope.currentPage];
    }
});