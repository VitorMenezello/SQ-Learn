<div id="schema-select">

    <md-select ng-model="schema"
               placeholder="Banco de Dados"
               class="md-no-underline"
               aria-label="Schema Select"
               ng-change="setColors(schema)">
        <md-option ng-repeat="schema in schemas" ng-value="schema">
            @{ schema.label }@
        </md-option>
    </md-select>

</div>