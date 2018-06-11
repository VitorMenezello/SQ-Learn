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
    $scope.schema = SCHEMAS[0];

    /* CSS Classes */
    $scope.colors = [
        "color-1",
        "color-2",
        "color-3",
        "color-4",
        "color-5",
        "color-6"
    ];

    $scope.result = MOVIE_GENRE;
});