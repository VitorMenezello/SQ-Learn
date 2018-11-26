<div id="schema">

    <div class="schema" layout="column">

        <div flex="15" class="schema-title" layout="row" layout-align="center start">

            <h3 ng-if="schema">
                Esquema do banco de dados <strong>@{ schema.label }@</strong>
            </h3>
            <h3 ng-if="!schema">
                Selecione um banco de dados
            </h3>

        </div>

        <div flex="85" layout="row" layout-wrap class="schema-tables">

            <div ng-repeat="table in schema.tables" flex="33" class="schema-table">

                <div ng-class="colors[table.name]">

                    <h3>
                        @{ table.name }@
                    </h3>

                </div>

                <ul>

                    <li ng-repeat="column in table.columns">

                        <div ng-class="colors[table.name]">
                            <md-icon md-svg-src="{{ url('/icons/chevron-right.svg') }}"></md-icon>

                            <span ng-class="{'schema-underline': column.primary_key}">
                            @{ column.column_name }@
                            </span>
                        </div>

                        <div ng-if="column.foreign_key" ng-class="colors[column.foreign_table_name]">
                            <span class="referred-attribute">
                                @{ column.foreign_column_name }@
                                <md-tooltip> @{ column.foreign_table_name }@ </md-tooltip>
                            </span>
                        </div>

                    </li>

                </ul>

            </div>

        </div>

    </div>

</div>