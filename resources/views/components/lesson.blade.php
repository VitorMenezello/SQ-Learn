<div class="lesson">

    <div layout="row" class="lesson-header" layout-align="center start">

        <h3>Tutorial SQL</h3>

    </div>

    <div class="lesson-content">

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

        <div layout="row" class="lesson-content-text justify">
            @{ lesson.content }@
        </div>

    </div>

</div>