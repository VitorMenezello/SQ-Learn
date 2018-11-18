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

    /* Switch between Lesson and Datatable */
    $scope.toggle = false;

    $scope.toggleSidenav = function (toggle)
    {
        $scope.toggle = toggle;
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
    $scope.$on('queryEvent', function(event, data) {
        $scope.runQuery(data);
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