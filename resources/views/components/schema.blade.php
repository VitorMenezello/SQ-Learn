<div class="schema">

    <div layout="row" class="schema-title" layout-align="center start">

        <h3>
            Esquema do banco de dados @{ schema.title }@
        </h3>

    </div>

    <div layout="row" layout-wrap>

        <div ng-repeat="table in schema.tables track by table.id" flex="33" class="schema-table">

            <div ng-class="colors[$index]">

                <h3>@{ table.title }@</h3>
                <md-tooltip> @{ table.title }@ </md-tooltip>

            </div>

            <ul>

                <li ng-repeat="attribute in table.attributes">

                    <div ng-class="colors[table.id]">
                        <md-icon md-svg-icon="chevron-right"></md-icon>

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