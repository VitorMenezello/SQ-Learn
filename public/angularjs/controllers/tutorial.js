app.controller('TutorialController', function ($scope) {
    $scope.lessons = LESSONS;

    $scope.currentLesson = 0;

    $scope.lesson = $scope.lessons[$scope.currentLesson];

    $scope.nextLesson = function () {
        $scope.currentLesson++;
        $scope.lesson = $scope.lessons[$scope.currentLesson];
    };

    $scope.previousLesson = function () {
        $scope.currentLesson--;
        $scope.lesson = $scope.lessons[$scope.currentLesson];
    };

    /* Cartoons Schema */
    $scope.schema = schema;

    /* CSS Classes */
    $scope.colors = [];

    $scope.setColors = function (schema) {
        let i = 1;
        for (let table in schema.tables){
            $scope.colors[table] = "color-" + i;
            i++;
        }
    };

    $scope.setColors($scope.schema);
});