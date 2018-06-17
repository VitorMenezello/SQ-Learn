<div id="schema" class="schema" layout="column">

    <div flex="15" class="schema-title" layout="row" layout-align="center start">

        <h3>
            <span ng-if="schema">
                Esquema do banco de dados @{ schema.title }@
            </span>
            <span ng-if="!schema">
                Selecione um banco de dados
            </span>
        </h3>

    </div>

    <div flex="85" layout="row" layout-wrap>

        <div ng-repeat="table in schema.tables track by table.id" flex="33" class="schema-table">

            <div ng-class="colors[$index]">

                <h3>@{ table.title }@</h3>

            </div>

            <ul>

                <li ng-repeat="attribute in table.attributes">

                    <div ng-class="colors[table.id]">
                        <md-icon md-svg-src="{{ url('/icons/chevron-right.svg') }}"></md-icon>

                        <span ng-class="{'schema-underline': attribute.pkey}">
                            @{ attribute.name }@
                        </span>
                    </div>

                    <div ng-if="attribute.ref" ng-class="colors[attribute.refTableId]">
                        <span class="referred-attribute">
                            @{ attribute.refAttribute }@
                            <md-tooltip> @{ schema.tables[attribute.refTableId].title }@ </md-tooltip>
                        </span>
                    </div>

                </li>

            </ul>

        </div>

    </div>

</div>