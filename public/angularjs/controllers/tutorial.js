app.controller('TutorialController', function ($scope, $http) {
    /* Lesson */
    $scope.lessons = lessons;
    $scope.currentLesson = 0;

    $scope.lesson = $scope.lessons[$scope.currentLesson];

    $scope.nextLesson = function ()
    {
        if ($scope.lesson.next_lesson_id !== null)
        {
            $scope.currentLesson++;
            $scope.lesson = $scope.lessons[$scope.currentLesson];
        }
    };

    $scope.previousLesson = function ()
    {
        if ($scope.lesson.prev_lesson_id !== null)
        {
            $scope.currentLesson--;
            $scope.lesson = $scope.lessons[$scope.currentLesson];
        }
    };

    /* IMBD Schema */
    $scope.schema = schema;

    /* CSS Classes */
    $scope.colors = [];

    $scope.setColors = function (schema)
    {
        let i = 1;
        for (let table in schema.tables)
        {
            $scope.colors[table] = "color-" + i;
            i++;
        }
    };

    $scope.setColors($scope.schema);

    /* Query Handler */

    $scope.$on('queryEvent', function(event, data)
    {
        console.log('data', data);
        $http.post('/post-query', { query: data, schema: $scope.schema['name'] })
            .then(
                function (response)
                {
                    if (response.data.success){
                        console.log('success', response.data.result);
                    }
                    else {
                        console.log('error', response.data.error);
                    }
                });
        //$scope.runQuery(data.query);
    })
});