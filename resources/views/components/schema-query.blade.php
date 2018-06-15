<div id="schema-query" class="schema-query" layout="column">

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

            <div ng-class="colors[table.id]">

                <md-checkbox aria-label="Select @{ schema.title }@"
                             ng-checked="isChecked(table.id)"
                             md-indeterminate="isIndeterminate(table.id)"
                             ng-click="toggleAll(table.id)">
                    <h3>
                        @{ table.title }@
                    </h3>
                </md-checkbox>

            </div>

            <ul>

                <li ng-repeat="attribute in table.attributes">

                    <div ng-class="colors[table.id]">
                        <md-checkbox ng-checked="exists(attribute.name, selected[table.id])"
                                     ng-click="toggle(attribute.name, selected[table.id])">
                            <span ng-class="{'schema-underline': attribute.pkey}">
                                @{ attribute.name }@
                            </span>
                        </md-checkbox>
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