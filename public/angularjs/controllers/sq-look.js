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
        let tableLabelIndex = $scope.labels[table].findIndex(el => el.name === $scope.schema.tables[table].title);
        $scope.labels[table].labeledAttributes = false;
        for (let i = 0; i < $scope.labels[table].length; i++){
            if (i !== tableLabelIndex && $scope.labels[table][i].hasOwnProperty('as') && $scope.labels[table][i].as !== ""){
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
            $scope.cleanIncompleteFunctions($scope.dialogTable.id);
            $scope.addTableToLabels($scope.dialogTable.id);
            $scope.buildQuery();
        }
    };

    $scope.listOfMethods = [
        'MAX', 'MIN', 'COUNT', 'AVG', 'SUM'
    ];

    $scope.showFunctionsDialog = function(table) {
        $scope.dialogTable = table;
        $scope.listOfAttributes = [];

        for (let i = 0; i < $scope.dialogTable.attributes.length; i++){
            $scope.listOfAttributes.push($scope.dialogTable.attributes[i]);
        }

        $mdDialog.show(functionsConfig);
    };

    $scope.cleanIncompleteFunctions = function(table) {
        for (let i = 0; i < $scope.functions[table].length; i++) {
            if (!$scope.functions[table][i].hasOwnProperty('method') ||
                !$scope.functions[table][i].hasOwnProperty('attribute')){
                $scope.functions[table].splice(i, 1);
            }
        }
    };

    $scope.addTableToLabels = function(table) {
        let tableLabelIndex = $scope.labels[table].findIndex(el => el.name === $scope.schema.tables[table].title);
        if ($scope.functions[table].length > 0){
            if (tableLabelIndex === -1){
                $scope.labels[table].push({name: $scope.schema.tables[table].title});
            }
        }
        else {
            if (tableLabelIndex > -1){
                $scope.labels[table].splice(tableLabelIndex, 1);
            }
        }
    };

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

    $scope.listOfJoins = [
        'INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN', 'FULL OUTER JOIN'
    ];

    $scope.showJoinsDialog = function(table) {
        $scope.dialogTable = table;
        $mdDialog.show(joinsConfig);
    };

    //endregion

    //region Schema Selector

    $scope.schemas = SCHEMAS;
    $scope.schema = null;
    $scope.schemaIsSelected = false;
    $scope.selected = [];
    $scope.filters = [];
    $scope.labels = [];
    $scope.functions = [];
    $scope.joins = [];

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

            // For each table, a list for possible attributes
            for (let i = 0; i < $scope.schema.tables.length; i++) {
                $scope.selected.push([]);
                $scope.filters.push([]);
                $scope.labels.push([]);
                $scope.functions.push([]);
                $scope.joins.push([]);
            }

            // For each foreign key, add to join list
            for (let i = 0; i < $scope.schema.tables.length; i++) {
                for (let j = 0; j < $scope.schema.tables[i].attributes.length; j++) {
                    if ($scope.schema.tables[i].attributes[j].ref) {
                        let join_1 = {
                            refTableId: $scope.schema.tables[i].attributes[j].refTableId,
                            refAttribute: $scope.schema.tables[i].attributes[j].refAttribute,
                            isJoined: false,
                            joinType: null
                        };
                        let join_2 = {
                            refTableId: i,
                            refAttribute: $scope.schema.tables[i].attributes[j].name,
                            isJoined: false,
                            joinType: null
                        };
                        $scope.joins[i].push(join_1);
                        $scope.joins[$scope.schema.tables[i].attributes[j].refTableId].push(join_2);
                    }
                }
            }
        }
    });

    //endregion

    //region Checkbox View

    $scope.exists = function (attribute, table) {
        if ($scope.schemaIsSelected === true)
            return $scope.selected[table].indexOf(attribute) > -1;
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

    $scope.toggle = function (attribute, table) {
        // SELECT
        let selectIndex = $scope.selected[table].indexOf(attribute);
        if (selectIndex > -1) {
            $scope.selected[table].splice(selectIndex, 1);
        }
        else {
            $scope.selected[table].push(attribute);
        }

        // AS
        let labelIndex = $scope.labels[table].findIndex(el => el.name === attribute);
        if (labelIndex > -1) {
            $scope.labels[table].splice(labelIndex, 1);
            if ($scope.labels[table].length === 1 && $scope.functions[table].length === 0){
                $scope.labels[table].splice(0, 1);
            }
        }
        else {
            if ($scope.labels[table].length === 0){
                $scope.labels[table].push({name: $scope.schema.tables[table].title});
            }
            $scope.labels[table].push({name: attribute});
        }
    };

    $scope.toggleAll = function(table) {
        if ($scope.selected[table].length === $scope.schema.tables[table].attributes.length) {
            $scope.selected[table] = [];
            $scope.labels[table] = [];
            $scope.addTableToLabels(table);
        }
        else if ($scope.selected[table].length >= 0) {
            if ($scope.labels[table].findIndex(el => el.name === $scope.schema.tables[table].title) === -1){
                $scope.labels[table].push({name: $scope.schema.tables[table].title});
            }
            for (let i = 0; i < $scope.schema.tables[table].attributes.length; i++){
                if ($scope.selected[table].indexOf($scope.schema.tables[table].attributes[i].name) === -1){
                    $scope.selected[table].push($scope.schema.tables[table].attributes[i].name);
                }
                if ($scope.labels[table].findIndex(el => el.name === $scope.schema.tables[table].attributes[i].name) === -1){
                    $scope.labels[table].push({name: $scope.schema.tables[table].attributes[i].name});
                }
            }
        }
    };

    //endregion

    //region Sentinels

    $scope.$watch('selected', function () {
        $scope.buildQuery();
    }, true);

    //endregion

    //region Query Builder

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
            for (let i = 0; i < $scope.schema.tables.length; i++) {

                // If any attribute from table has been selected
                if ($scope.selected[i].length > 0 || $scope.functions[i].length > 0) {
                    tableNum++;
                }
                if (tableNum > 1) {
                    multipleTables = true;
                }

            }

            // Collect selected attributes, functions and table names
            for (let i = 0; i < $scope.schema.tables.length; i++) {

                // Get table label, if it has one
                let tableName = $scope.schema.tables[i].title;
                let tableLabelIndex = $scope.labels[i].findIndex(el => el.name === tableName);
                let isTableLabeled = (
                    tableLabelIndex > -1 &&
                    $scope.labels[i][tableLabelIndex].hasOwnProperty('as') &&
                    $scope.labels[i][tableLabelIndex].as !== ""
                );
                let tableLabel = (isTableLabeled ?
                    ($scope.labels[i][tableLabelIndex].as.indexOf(' ') > -1 ?
                        "'" + $scope.labels[i][tableLabelIndex].as + "'" :
                        $scope.labels[i][tableLabelIndex].as) :
                    "");

                // If there are any selected attributes in the table
                if ($scope.selected[i].length > 0 || $scope.functions[i].length > 0){

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
                            let attributeLabelIndex = $scope.labels[i].findIndex(el => el.name === attributeName);
                            let isAttributeLabeled = (
                                attributeLabelIndex > -1 &&
                                $scope.labels[i][attributeLabelIndex].hasOwnProperty('as') &&
                                $scope.labels[i][attributeLabelIndex].as !== ""
                            );
                            let attributeLabel = (isAttributeLabeled ?
                                ($scope.labels[i][attributeLabelIndex].as.indexOf(' ') > -1 ?
                                    "'" + $scope.labels[i][attributeLabelIndex].as + "'" :
                                    $scope.labels[i][attributeLabelIndex].as) :
                                "");

                            // Attribute name with label for SELECT statement
                            let attributeAsLabel = attributeName + (isAttributeLabeled ? " AS " + attributeLabel : "");

                            selectedAttributes += (selectedAttributes === "" ?
                                (multipleTables ? table + "." : "") + attributeAsLabel :
                                ", " + (multipleTables ? table + "." : "") +  attributeAsLabel);
                        }

                        asterisk = false;
                    }

                    // Add functions to the Select statement
                    for (let j = 0; j < $scope.functions[i].length; j++) {

                        let isFunctionDistinct = (
                            $scope.functions[i][j].hasOwnProperty('distinct') &&
                            $scope.functions[i][j].distinct !== ""
                        );
                        let isFunctionLabeled = (
                            $scope.functions[i][j].hasOwnProperty('as') &&
                            $scope.functions[i][j].as !== ""
                        );
                        let functionName = $scope.functions[i][j].method +
                            "(" +
                            (isFunctionDistinct ? "DISTINCT " : "") +
                            (multipleTables ? table + "." : "") +
                            $scope.functions[i][j].attribute +
                            ")";
                        let functionLabel = (isFunctionLabeled ?
                            ($scope.functions[i][j].as.indexOf(' ') > -1 ?
                                "'" + $scope.functions[i][j].as + "'" :
                                $scope.functions[i][j].as)
                            : "");

                        // Function name with label for SELECT statement
                        let functionAsLabel = functionName + (isFunctionLabeled ? " AS " + functionLabel : "");

                        selectedAttributes += (selectedAttributes === "" ?
                            functionAsLabel :
                            ", " +  functionAsLabel);

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

    $scope.addNewFunction = function (form) {
        if (form.$valid){
            $scope.newFunction = {};
            $scope.functions[$scope.dialogTable.id].push($scope.newFunction);
        }
    };

    $scope.removeFunction = function (funct) {
        $scope.functions[$scope.dialogTable.id].splice(funct, 1);
    }
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

