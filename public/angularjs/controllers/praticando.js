app.controller('PraticandoController', function ($scope) {
    $scope.schemas = schemas;

    /* CSS Classes */
    $scope.colors = [];

    $scope.setColors = function (schema) {
        let i = 1;
        for (let table in schema.tables){
            $scope.colors[table] = "color-" + i;
            i++;
        }
    }
});