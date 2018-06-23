//region Main Page Controller
app.controller('SQLookController', function ($scope, $mdDialog) {
    //region General Dialog Config

    $scope.closeIconUrl = closeIconUrl;

    //endregion

    //region Filters Dialog Config

    $scope.plusCircleIconUrl = plusCircleIconUrl;

    $scope.filtersDialogTemplate = filtersDialogTemplate;

    let filtersConfig = {
        templateUrl: $scope.filtersDialogTemplate,
        controller: 'FiltersController',
        clickOutsideToClose: true,
        scope: $scope,
        preserveScope: true,
        resolve: {},
        onRemoving: function () {
            $scope.cleanIncompleteFilters($scope.dialogTable.id);
            $scope.buildQuery();
        }
    };

    $scope.listOfConditions = [
        '=', '<>', '>', '<', '>=', '<='
    ];

    $scope.listOfOperators = [
        ['AND', 'OR', 'AND NOT', 'OR NOT'],
        ['NOT']
    ];

    $scope.showFiltersDialog = function(table) {
        $scope.dialogTable = table;
        $scope.listOfAttributes = [];

        for (let i = 0; i < $scope.dialogTable.attributes.length; i++){
            $scope.listOfAttributes.push($scope.dialogTable.attributes[i]);
        }

        $mdDialog.show(filtersConfig);
    };

    $scope.cleanIncompleteFilters = function(table) {
        for (let i = 0; i < $scope.filters[table].length; i++) {
            if (!$scope.filters[table][i].hasOwnProperty('attribute') ||
                !$scope.filters[table][i].hasOwnProperty('condition') ||
                !$scope.filters[table][i].hasOwnProperty('value') ||
                (!$scope.filters[table][i].hasOwnProperty('operator') && i !== 0)){
                $scope.filters[table].splice(i, 1);
            }
        }
    };

    //endregion

    //region Labels Dialog Config

    $scope.labelsDialogTemplate = labelsDialogTemplate;

    let labelsConfig = {
        templateUrl: $scope.labelsDialogTemplate,
        controller: 'LabelsController',
        clickOutsideToClose: true,
        scope: $scope,
        preserveScope: true,
        resolve: {},
        onRemoving: function () {
            $scope.markLabelList($scope.dialogTable.id);
            $scope.buildQuery();
        }
    };

    $scope.showLabelsDialog = function(table) {
        $scope.dialogTable = table;

        $mdDialog.show(labelsConfig);
    };

    $scope.markLabelList = function(table) {
        $scope.labels[table].labeledAttributes = false;
        for (let i = 0; i < $scope.labels[table].attributes.length; i++){
            if ($scope.labels[table].attributes[i].hasOwnProperty('as') && $scope.labels[table].attributes[i].as !== ""){
                $scope.labels[table].labeledAttributes = true;
            }
        }
    };

    //endregion

    //region Functions Dialog Config

    $scope.functionsDialogTemplate = functionsDialogTemplate;

    let functionsConfig = {
        templateUrl: $scope.functionsDialogTemplate,
        controller: 'FunctionsController',
        clickOutsideToClose: true,
        scope: $scope,
        preserveScope: true,
        resolve: {},
        onRemoving: function () {
            $scope.buildQuery();
        }
    };

    $scope.listOfFunctions = [
        'MAX', 'MIN', 'COUNT', 'AVG', 'SUM'
    ];

    //endregion

    //region Joins Dialog Config

    $scope.joinsDialogTemplate = joinsDialogTemplate;

    let joinsConfig = {
        templateUrl: $scope.joinsDialogTemplate,
        controller: 'JoinsController',
        clickOutsideToClose: true,
        scope: $scope,
        preserveScope: true,
        resolve: {},
        onRemoving: function () {
            $scope.buildQuery();
        }
    };

    //endregion

    //region Schema Selector

    $scope.schemas = SCHEMAS;
    $scope.schema = null;
    $scope.schemaIsSelected = false;
    $scope.selected = [];
    $scope.filters = [];
    $scope.labels = [];

    $scope.query = "";

    $scope.$watch('schema', function () {
        if ($scope.schema !== null) {
            $scope.schemaIsSelected = true;

            // SELECT
            $scope.selected = [];

            // WHERE
            $scope.filters = [];

            // AS
            $scope.labels = [];

            // FUNCTIONS
            $scope.functions = [];

            // JOINS
            $scope.joins = [];

            // For each table, a list
            for (let i = 0; i < $scope.schema.tables.length; i++) {
                $scope.selected.push([]);
                $scope.filters.push([]);
                let label = {
                    title: $scope.schema.tables[i].title,
                    attributes: []
                };
                $scope.labels.push(label);
                for (let j = 0; j < $scope.schema.tables[i].attributes.length; j++){
                    label = {
                        name: $scope.schema.tables[i].attributes[j].name
                    };
                    $scope.labels[i].attributes.push(label);
                }
            }
        }
    });

    //endregion

    //region Checkbox View

    $scope.exists = function (attribute, selectedAttributes) {
        if ($scope.schemaIsSelected === true)
            return selectedAttributes.indexOf(attribute) > -1;
    };

    $scope.isIndeterminate = function(table) {
        return ($scope.selected[table].length !== 0 &&
            $scope.selected[table].length !== $scope.schema.tables[table].attributes.length);
    };

    $scope.isChecked = function(table) {
        return $scope.selected[table].length === $scope.schema.tables[table].attributes.length;
    };

    //endregion

    //region Checkbox Click

    $scope.toggle = function (attribute, selectedAttributes) {
        let idx = selectedAttributes.indexOf(attribute);
        if (idx > -1) {
            selectedAttributes.splice(idx, 1);
        }
        else {
            selectedAttributes.push(attribute);
        }
    };

    $scope.toggleAll = function(table) {
        if ($scope.selected[table].length === $scope.schema.tables[table].attributes.length) {
            $scope.selected[table] = [];
        }
        else if ($scope.selected[table].length === 0 || $scope.selected[table].length > 0) {
            for (let i = 0; i < $scope.schema.tables[table].attributes.length; i++){
                if ($scope.selected[table].indexOf($scope.schema.tables[table].attributes[i].name) === -1){
                    $scope.selected[table].push($scope.schema.tables[table].attributes[i].name);
                }
            }
        }
    };

    //endregion

    //region Query Builder

    $scope.$watch('selected', function () {
        $scope.buildQuery();
    }, true);

    $scope.buildQuery = function () {
        if ($scope.selected.length !== 0) {
            let selectedAttributes = "";
            let fromTables = "";
            let whereStatement = "";

            let asterisk = true;
            let showQuery = false;
            let condition = false;
            let multipleTables = false;

            // Find out if multiple tables are selected and conditions for those which are
            let tableNum = 0;
            for (let i = 0; i < $scope.selected.length; i++) {

                // If any attribute from table has been selected
                if ($scope.selected[i].length > 0) {
                    tableNum++;
                }
                if (tableNum > 1) {
                    multipleTables = true;
                }

            }

            // Collect selected attributes and table names
            for (let i = 0; i < $scope.selected.length; i++) {

                // Get table label, if it has one
                let tableName = $scope.schema.tables[i].title;
                let isTableLabeled = (
                    $scope.labels[i].hasOwnProperty('as') &&
                    $scope.labels[i].as !== ""
                );
                let tableLabel = (isTableLabeled ? $scope.labels[i].as.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').join('_') : "");

                // If there are any selected attributes in the table
                if ($scope.selected[i].length > 0){

                    // Query is true
                    showQuery = true;

                    // Table name with label for FROM statement
                    let tableAsLabel = tableName + (isTableLabeled ? " AS " + tableLabel : "");

                    // Add table name to the query
                    fromTables += (fromTables === "" ?
                        tableAsLabel :
                        ", " + tableAsLabel);

                    // Table identifier, be it name or label
                    let table = (isTableLabeled ? tableLabel : tableName);

                    // Check if all attributes from the table are selected or if no attribute has been labeled
                    if ($scope.selected[i].length === $scope.schema.tables[i].attributes.length && !$scope.labels[i].labeledAttributes) {

                        // Attribute list becomes asterisk
                        selectedAttributes += (selectedAttributes === "" ?
                            (multipleTables ? table + "." : "") + "*" :
                            ", " + (multipleTables ? table + "." : "") + "*");
                    }

                    // Otherwise
                    else {

                        // All attributes selected are listed, separated by comma
                        for (let j = 0; j < $scope.selected[i].length; j++){

                            // Get attribute label, if it has one
                            let attributeName = $scope.selected[i][j];
                            let labelIndex = $scope.labels[i].attributes.findIndex(el => el.name === attributeName);
                            let isAttributeLabeled = (
                                $scope.labels[i].attributes[labelIndex].hasOwnProperty('as') &&
                                $scope.labels[i].attributes[labelIndex].as !== ""
                            );
                            let attributeLabel = (isAttributeLabeled ?
                                $scope.labels[i].attributes[labelIndex].as.normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').join('_') :
                                "");

                            // Attribute name with label for SELECT statement
                            let attributeAsLabel = attributeName + (isAttributeLabeled ? " AS " + attributeLabel : "");

                            selectedAttributes += (selectedAttributes === "" ?
                                (multipleTables ? table + "." : "") + attributeAsLabel :
                                ", " + (multipleTables ? table + "." : "") +  attributeAsLabel);
                        }

                        asterisk = false;
                    }

                    // Find conditions for Query
                    for (let j = 0; j < $scope.filters[i].length; j++){
                        condition = true;

                        whereStatement += (whereStatement === "" ? "" : " ") +
                            ($scope.filters[i][j].hasOwnProperty('operator') ?
                                    (typeof($scope.filters[i][j].operator) === "undefined" ?
                                        "" :
                                        $scope.filters[i][j].operator + " ")
                                : "") +
                            (multipleTables? table + "." : "") +
                            $scope.filters[i][j].attribute + " " +
                            $scope.filters[i][j].condition + " " +
                            $scope.filters[i][j].value;
                    }
                }
            }


            // If all tables selected include all attributes, query becomes SELECT *
            if (asterisk === true){
                selectedAttributes = "*";
            }

            // If query has conditions, include where statement

            // If query has any attributes selected, show query
            if (showQuery === true){
                $scope.query = "SELECT " + selectedAttributes +
                    " FROM " + fromTables +
                    (condition ? " WHERE " + whereStatement : "");
            }
            else {
                $scope.query = "";
            }
        }
    };

    //endregion

    //region CSS Classes

    $scope.colors = [
        "color-1",
        "color-2",
        "color-3",
        "color-4",
        "color-5",
        "color-6"
    ];

    //endregion
})
//endregion

//region Filters Dialog
.controller('FiltersController', function ($scope, $mdDialog) {
    $scope.addingFilter = false;

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.addNewFilter = function (form) {
        if (form.$valid){
            $scope.newFilter = {};
            $scope.filters[$scope.dialogTable.id].push($scope.newFilter);
        }
    };

    $scope.removeFilter = function (filter) {
        $scope.filters[$scope.dialogTable.id].splice(filter, 1);
    }
})

.filter('operandFilter', function () {
    return function(input, first){
        if (first){
            return input[1];
        }
        else {
            return input[0];
        }
    }
})

//endregion

//region Labels Dialog
.controller('LabelsController', function ($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
})
//endregion

//region Functions Dialog
.controller('FunctionsController', function ($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
})
//endregion

//region Joins Dialog
.controller('JoinsController', function ($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };
});
//endregion

