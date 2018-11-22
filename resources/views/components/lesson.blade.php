<div id="lesson" class="lesson">

    <div layout="row" layout-align="center center" class="lesson-header">

        <h4>LIÇÃO @{ currentLesson < 10 ? '0' : '' }@@{ currentLesson + 1 }@</h4>

    </div>

    <div layout="row" layout-align="center center" class="lesson-title">
        <md-icon md-svg-src="{{ url('/icons/chevron-left.svg') }}"
                 ng-class="{'disabled': lesson.prev_lesson_id === null}"
                 ng-click="previousLesson()"
                 aria-label="Previous Lesson"></md-icon>

        <h3>@{ lesson.title }@</h3>

        <md-icon md-svg-src="{{ url('/icons/chevron-right.svg') }}"
                 ng-class="{'disabled': lesson.next_lesson_id === null}"
                 ng-click="nextLesson()"
                 aria-label="Next Lesson"></md-icon>
    </div>

    <div class="lesson-content">

        <div ng-bind-html="lesson.content" class="lesson-content-text"></div>

        <div id="answer">
            <md-input-container class="md-block question">
                <textarea aria-label="Question query" name="question" rows="5" ng-model="question" md-no-resize></textarea>
            </md-input-container>
        </div>

    </div>

</div>