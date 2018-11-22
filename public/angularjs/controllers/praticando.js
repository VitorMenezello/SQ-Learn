app.controller('PraticandoController', function ($scope) {
    $scope.schemas = schemas;

    /* CSS Classes */
    $scope.colors = [];

    $scope.setColors = function (schema)
    {
        let i = 1;
        for (let table in schema.tables){
            $scope.colors[table] = "color-" + i;
            i++;
        }
    };

    /* Query Handler */
    $scope.$on('queryEvent', function(event, data)
    {
        if ($scope.schema) {
            $scope.$broadcast('datatableEvent', { query: data, schema: $scope.schema['name'] });
        }
        else {
            $scope.$broadcast('datatableEvent', { query: data, schema: null });
        }
    });
});