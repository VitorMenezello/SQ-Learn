app.controller('PraticandoController', function ($scope)
{
    /* Schema Selector */
    $scope.schemas = schemas;

    $scope.onSchemaSelect = function ()
    {
        $scope.setColors();
        $scope.$broadcast('clearEvent');
    };

    /* CSS Classes */
    $scope.colors = [];

    $scope.setColors = function ()
    {
        let i = 1;
        for (let table in $scope.schema.tables){
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