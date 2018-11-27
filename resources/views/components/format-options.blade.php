<div id="format-options" class="format-options">

    <div class="format-options-title" layout="row" layout-align="center center">

        <h3>
            Opções de Formatação
        </h3>

    </div>

    <div class="format-options-content" layout="column">

        <md-checkbox ng-model="removeComments" ng-disabled="loading">
            Remover comentários
        </md-checkbox>

        <md-input-container>
            <label>Palavras Chave</label>
            <md-select ng-model="keyword"
                       ng-disabled="loading"
                       class="md-no-underline"
                       aria-label="Keywords Select">
                <md-option ng-repeat="option in wordOptions" ng-value="option.value">
                    @{ option.label }@
                </md-option>
            </md-select>
        </md-input-container>

        <md-input-container>
            <label>Identificadores</label>
            <md-select ng-model="identifier"
                       ng-disabled="loading"
                       class="md-no-underline"
                       aria-label="Identifiers Select">
                <md-option ng-repeat="option in wordOptions" ng-value="option.value">
                    @{ option.label }@
                </md-option>
            </md-select>
        </md-input-container>

        <md-input-container>
            <label>Indentação</label>
            <input type="number" ng-model="indentation" min="0" ng-disabled="loading">
        </md-input-container>


    </div>

</div>