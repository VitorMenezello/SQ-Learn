<div class="lesson">

    <div flex class="lesson-content">

        <div layout="row" layout-align="center center">

            <md-button class="md-raised" ng-disabled="!lesson.previous" ng-click="previousLesson()">
                <md-icon md-svg-icon="chevron-left"></md-icon>
            </md-button>

            <h3>Lição @{ currentLesson + 1 }@</h3>

            <md-button class="md-raised" ng-disabled="!lesson.next" ng-click="nextLesson()">
                <md-icon md-svg-icon="chevron-right"></md-icon>
            </md-button>

        </div>

        <div layout="row" layout-align="center center">
            <h3>@{ lesson.title }@</h3>
        </div>

        <div ng-repeat="element in lesson.content" layout="row" class="lesson-content-text" layout-align="center center">

            <div ng-if="element.type === 'p'" class="lesson-text">
                <p>
                    @{ element.text }@
                </p>
            </div>

            <div ng-if="element.type === 'code'" class="lesson-code">
                <p>
                    @{ element.text }@
                </p>
            </div>

            <div ng-if="element.type === 'question'" flex-gt-xs="100" id="answer">
                <md-input-container class="md-block question">
                    <textarea aria-label="Question query" name="question" rows="5" ng-model="question" md-no-resize></textarea>
                </md-input-container>
            </div>

        </div>

    </div>

</div>