<div id="schema-select" class="schema-select" flex="60" layout="column">

    <md-select ng-model="schema" placeholder="Banco de Dados" class="md-no-underline" aria-label="Schema Select">
        <md-option ng-repeat="schema in schemas" ng-value="schema">
            @{ schema.title }@
        </md-option>
    </md-select>

    <div flex>
        @component('components.schema')
        @endcomponent
    </div>

</div>