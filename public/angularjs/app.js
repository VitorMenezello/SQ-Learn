let app = angular.module('App', ['ngMaterial', 'ngMessages', 'ngMdIcons', 'ngSanitize'])

// Avoiding conflicts with blade
.config(function ($interpolateProvider, $httpProvider)
{
    $interpolateProvider.startSymbol('@{').endSymbol('}@');
    //$httpProvider.defaults.withCredentials = true;
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

.controller('DatatableController', function ($scope, $http)
{
    $scope.initialize = function ()
    {
        $scope.loading = false;
        $scope.result = false;
        $scope.error = '';
        $scope.attNames = [];
        $scope.attValues = [];

        $scope.schema = null;
        $scope.query = null;

        $scope.rows = 0;
        $scope.columns = 0;

        $scope.pages = 0;
        $scope.page = 1;
        $scope.itemsOptions = [10, 25, 50, 100];
        $scope.items = $scope.itemsOptions[0];
    };

    $scope.initialize();

    // Clear datatable event
    $scope.$on('clearEvent', function (event, data)
    {
        $scope.initialize();
    });

    // Datatable event
    $scope.$on('datatableEvent', function (event, data)
    {
        $scope.schema = data.schema;
        $scope.query = data.query;
        $scope.postQuery();
    });

    // Get query result
    $scope.postQuery = function ()
    {
        if ($scope.schema){
            $scope.loading = true;
            $http.post('/post-query',
                {
                    query: $scope.query,
                    schema: $scope.schema,
                    limit: $scope.items,
                    page: $scope.page
                })
                .then(
                    function (response)
                    {
                        $scope.loading = false;
                        $scope.result = response.data.success;
                        if ($scope.result){
                            let data = response.data.result;
                            let count = response.data.count;
                            $scope.extractAttributes(data, count);
                        }
                        else if (response.data.error){
                            $scope.error = response.data.error;
                        }
                        else {
                            console.log(response);
                            $scope.error = 'Erro desconhecido.';
                        }
                    },
                    function (error) {
                        $scope.loading = false;
                        console.log(error);
                    });
        }
        else {
            $scope.result = false;
            $scope.error = 'Escolha um esquema de dados primeiro!';
        }
    };

    // Extract attribute names and values
    $scope.extractAttributes = function (data, count)
    {
        if (data.length > 0){
            let object = data[0];
            $scope.attNames = Object.keys(object);
            $scope.columns = $scope.attNames.length;
        }
        $scope.attValues = data;
        $scope.rows = count;

        $scope.calculatePage();
    };

    // On selection of items per page
    $scope.selectLimit = function ()
    {
        $scope.calculatePage();
        $scope.postQuery();
    };

    // Calculate the number of pages
    $scope.calculatePage = function ()
    {
        $scope.pages = Math.ceil($scope.rows / $scope.items);
        if ($scope.page > $scope.pages){
            $scope.page = 1;
        }
    };

    // Go to next page
    $scope.nextPage = function ()
    {
        if ($scope.page < $scope.pages && !$scope.loading)
        {
            $scope.page++;
            $scope.postQuery();
        }
    };

    // Go to previous page
    $scope.prevPage = function ()
    {
        if ($scope.page > 1 && !$scope.loading)
        {
            $scope.page--;
            $scope.postQuery();
        }
    };

    // Calculate pagination range
    $scope.pageRange = function ()
    {
        let pageRange = [];
        for (let i = 1; i <= $scope.pages; i ++) {
            pageRange.push(i);
        }
        return pageRange;
    };
})

.filter('reverse', function()
{
    return function(items)
    {
        return items.slice().reverse();
    };
});