let app = angular.module('App', ['ngMaterial', 'ngMessages', 'ngMdIcons', 'ngSanitize'])

// Avoiding conflicts with blade
.config(function ($interpolateProvider)
{
    $interpolateProvider.startSymbol('@{').endSymbol('}@');
})

.controller('MenuController', function($scope, $window)
{
    $scope.currentPage = $window.location.href.split('/').pop();
})

.controller('ConsoleController', function ($scope)
{
    $scope.consoleQuery = '';
    $scope.consoleOculto = true;
    $scope.queryHistory = [];
    $scope.previousQueries = [];
    $scope.previousQueryIndex = null;
    $scope.currentQuery = '';

    // Open and close console
    $scope.triggerConsole = function ()
    {
        $scope.consoleOculto = !$scope.consoleOculto;
    };

    // Submit query
    $scope.query = function ()
    {
        $scope.$emit('queryEvent', $scope.consoleQuery);

        $scope.previousQueries.push($scope.consoleQuery);
        $scope.previousQueryIndex = null;
        $scope.consoleQuery = '';
        $scope.currentQuery = '';
    };

    // Pressing upkey will search for previous queries
    $scope.upKey = function ()
    {
        if ($scope.previousQueries.length > 0)
        {
            if ($scope.previousQueryIndex === null)
            {
                $scope.currentQuery = $scope.consoleQuery;
                $scope.previousQueryIndex = $scope.previousQueries.length - 1;
                $scope.consoleQuery = $scope.previousQueries[$scope.previousQueryIndex];
            }
            else if ($scope.previousQueryIndex > 0)
            {
                $scope.previousQueryIndex--;
                $scope.consoleQuery = $scope.previousQueries[$scope.previousQueryIndex];
            }
        }
    };

    // Pressing downkey will search downward in the previous queries
    $scope.downKey = function ()
    {
        if ($scope.previousQueryIndex !== null)
        {
            if ($scope.previousQueryIndex === $scope.previousQueries.length - 1)
            {
                $scope.previousQueryIndex = null;
                $scope.consoleQuery = $scope.currentQuery;
                $scope.currentQuery = '';
            }
            else {
                $scope.previousQueryIndex++;
                $scope.consoleQuery = $scope.previousQueries[$scope.previousQueryIndex];
            }
        }
    };
})

.filter('reverse', function()
{
    return function(items) {
        return items.slice().reverse();
    };
});