<div id="format">

    <div class="format" layout="column">

        <div flex="15" class="format-title" layout="row" layout-align="center start">

            <h3>
                SQL Format
            </h3>

        </div>

        <div flex="85" class="format-fields">

            <div class="format-input">
                <md-input-container class="md-block"
                                    ng-disabled="loading">
                    <textarea aria-label="Format input"
                              placeholder="Insira sua consulta aqui"
                              name="query"
                              rows="10"
                              ng-model="query"
                              md-no-resize></textarea>
                </md-input-container>
            </div>

            <div class="format-buttons">
                <md-button class="md-raised main-button"
                           ng-click="formatQuery()"
                           ng-disabled="loading">Formatar</md-button>
            </div>

            <div class="format-result" ng-bind-html="result"></div>

        </div>

    </div>

</div>