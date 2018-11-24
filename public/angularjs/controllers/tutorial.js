app.controller('TutorialController', function ($scope)
{
    /* Lesson */
    $scope.lessons = lessons;
    $scope.currentLesson = 0;
    $scope.question = '';
    $scope.correctAnswer = false;
    $scope.form = null;

    $scope.lesson = $scope.lessons[$scope.currentLesson];

    $scope.setForm = function (form)
    {
        $scope.form = form;
    };

    $scope.nextLesson = function ()
    {
        if ($scope.lesson.next_lesson_id !== null)
        {
            $scope.currentLesson++;
            $scope.lesson = $scope.lessons[$scope.currentLesson];

            if ($scope.form)
            {
                $scope.clearLesson();
            }
        }
    };

    $scope.previousLesson = function ()
    {
        if ($scope.lesson.prev_lesson_id !== null)
        {
            $scope.currentLesson--;
            $scope.lesson = $scope.lessons[$scope.currentLesson];

            if ($scope.form)
            {
                $scope.clearLesson();
            }
        }
    };

    $scope.onLessonSelect = function ()
    {
        $scope.currentLesson = $scope.lessons.indexOf($scope.lesson);

        if ($scope.form)
        {
            $scope.clearLesson();
        }
    };

    $scope.clearLesson = function ()
    {
        $scope.question = '';
        $scope.correctAnswer = false;
        $scope.form.question.$setValidity('empty', true);
        $scope.form.question.$setValidity('correct', true);
        $scope.form.question.$setValidity('hint', true);
    };

    $scope.answer = function (form)
    {
        $scope.setForm(form);

        let question = $scope.question.toLowerCase();

        $scope.form.question.$setValidity('empty', question !== '');

        if (question === $scope.lesson.answer ||
            ((question.substr(0, question.length - 1) === $scope.lesson.answer) && (question[question.length - 1] === ';'))
        ) {
            $scope.correctAnswer = true;
            $scope.form.question.$setValidity('correct', true);
            $scope.form.question.$setValidity('hint', true);
        }
        else {
            $scope.form.question.$setValidity('correct', false);

            if ($scope.lesson.hasOwnProperty('hint') && $scope.lesson.hint !== null){
                $scope.form.question.$setValidity('hint', false);
            }
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
    $scope.$on('queryEvent', function(event, data)
    {
        $scope.toggleSidenav(true);
        $scope.$broadcast('datatableEvent', { query: data, schema: $scope.schema['name'] });
    });
});