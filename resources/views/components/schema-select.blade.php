<div id="schema-select" class="schema-select">

    <md-select ng-model="schema"
               placeholder="Esquemas"
               class="md-no-underline"
               aria-label="Schema Select"
               ng-change="onSchemaSelect()">
        <md-option ng-repeat="schema in schemas" ng-value="schema">
            @{ schema.label }@
        </md-option>
    </md-select>

</div>