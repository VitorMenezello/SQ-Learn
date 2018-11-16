app.controller('PraticandoController', function ($scope, $http) {
    $scope.schemas = schemas;

    /* CSS Classes */
    $scope.colors = [];

    $scope.setColors = function (schema) {
        let i = 1;
        for (let table in schema.tables){
            $scope.colors[table] = "color-" + i;
            i++;
        }
    };

    /* Query Handler */
    $scope.$on('queryEvent', function(event, data) {
        if ($scope.schema){
            $scope.runQuery(data);
        }
        else {
            $scope.$broadcast('datatableEvent', { success: false, error: 'Escolha um esquema de dados primeiro!' });
        }
    });

    $scope.runQuery = function (query)
    {
        $http.post('/post-query', { query: query, schema: $scope.schema['name'] })
            .then(
                function (response)
                {
                    if (response.data.success){
                        let data = response.data.result;
                        $scope.$broadcast('datatableEvent', { success: true, data: data });
                    }
                    else {
                        let error = response.data.error;
                        $scope.$broadcast('datatableEvent', { success: false, error: error });
                    }
                });
    }
});