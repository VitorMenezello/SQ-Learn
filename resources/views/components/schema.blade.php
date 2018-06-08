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

            </div>

            <ul>

                <li ng-repeat="attribute in table.attributes">

                    <span class="ng-class: colors[table.id]">
                        <span ng-class="{'schema-underline': attribute.primaryKey}">
                            @{ attribute.name }@
                        </span>
                    </span>

                    <span ng-if="attribute.ref" class="ng-class: colors[attribute.referredTable]">
                        @{ attribute.referredAttribute }@
                    </span>

                </li>

            </ul>

        </div>

    </div>

</div>