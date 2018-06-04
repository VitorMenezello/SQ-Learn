<div class="schema">

    <div layout="row" layout-wrap>

        <div ng-repeat="table in schema.tables track by table.id" flex="33" class="schema-table">

            <div ng-class="titleColors[$index]">
                <h3>@{ table.title }@</h3>
            </div>

            <ul>
                <li ng-repeat="attribute in table.attributes">
                    <span ng-class="{'schema-underline': attribute.primaryKey}" class="ng-class: contentColors[table.id]">
                        @{ attribute.name }@
                    </span>
                    <span ng-if="attribute.ref" class="ng-class: contentColors[attribute.referredTable]">
                        @{ attribute.referredAttribute }@
                    </span>
                </li>
            </ul>

        </div>

    </div>

</div>