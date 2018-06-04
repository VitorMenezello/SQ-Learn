<div class="lesson">

    <div layout="row" class="lesson-header" layout-align="center start">

        <h3>Tutorial SQL</h3>

    </div>

    <div class="lesson-content">

        <div layout="row" layout-align="center center">
            <md-button class="md-raised" ng-disabled="!licao.licaoAnterior" ng-click="previousLesson()"> < </md-button>
            <h3>Lição @{ numeroLicao }@</h3>
            <md-button class="md-raised" ng-disabled="!licao.licaoSeguinte" ng-click="nextLesson()"> > </md-button>
        </div>

        <div layout="row" layout-align="center center">
            <h3>@{ licao.titulo }@</h3>
        </div>

        <div layout="row" class="lesson-content-text justify">
            @{ licao.conteudo }@
        </div>

    </div>

</div>