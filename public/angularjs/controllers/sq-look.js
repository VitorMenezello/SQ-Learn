app.controller('SQLookController', function ($scope) {
    $scope.schemas = SCHEMAS;
    $scope.schema = null;
    $scope.schemaIsSelected = false;
    $scope.selected = [];

    $scope.query = "";

    $scope.$watch('schema', function () {
        if ($scope.schema !== null){
            $scope.schemaIsSelected = true;
            $scope.selected = [];
            for (let i = 0; i < $scope.schema.tables.length; i++){
                $scope.selected.push([]);
            }
        }
    });

    /* Checkbox View */
    $scope.exists = function (item, list) {
        if ($scope.schemaIsSelected === true)
            return list.indexOf(item) > -1;
    };

    $scope.isIndeterminate = function(table) {
        return ($scope.selected[table].length !== 0 &&
            $scope.selected[table].length !== $scope.schema.tables[table].attributes.length);
    };

    $scope.isChecked = function(table) {
        return $scope.selected[table].length === $scope.schema.tables[table].attributes.length;
    };

    /* Checkbox Click */

    $scope.toggle = function (item, list) {
        let idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };

    $scope.toggleAll = function(table) {
        if ($scope.selected[table].length === $scope.schema.tables[table].attributes.length) {
            $scope.selected[table] = [];
        } else if ($scope.selected[table].length === 0 || $scope.selected[table].length > 0) {
            for (let i = 0; i < $scope.schema.tables[table].attributes.length; i++){
                if ($scope.selected[table].indexOf($scope.schema.tables[table].attributes[i].name) === -1){
                    $scope.selected[table].push($scope.schema.tables[table].attributes[i].name);
                }
            }
        }
    };

    $scope.$watch('selected', function () {
        if ($scope.selected.length !== 0) {

            let selectedAttributes = "";
            let asterisk = true;
            let showQuery = false;

            for (let i = 0; i < $scope.selected.length; i++) {

                if ($scope.selected[i].length > 0){
                    showQuery = true;
                    if ($scope.selected[i].length === $scope.schema.tables[i].attributes.length) {
                        asterisk = asterisk && true;
                    }
                    else {
                        asterisk = asterisk && false;
                    }
                    for (let j = 0; j < $scope.selected[i].length; j++){
                        selectedAttributes += (selectedAttributes === "" ? $scope.selected[i][j] : ", " + $scope.selected[i][j]);
                    }
                }
            }

            if (asterisk === true) {
                selectedAttributes = "*";
            }

            if (showQuery === true){
                $scope.query = "SELECT " + selectedAttributes;
            }
            else {
                $scope.query = "";
            }
        }
    }, true);

    /* CSS Classes */

    $scope.colors = [
        "color-1",
        "color-2",
        "color-3",
        "color-4",
        "color-5",
        "color-6"
    ];
});