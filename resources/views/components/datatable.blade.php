<div id="datatable" class="datatable" layout="column">

    <div flex="15" class="schema-title" layout="row" layout-align="center center">

        <h3>
            Resultados
        </h3>

    </div>

    <div flex layout="row" layout-align="center center">

        <span ng-if="!result" class="no-results">
            Nenhuma query computada.
        </span>

        <table>

            <tr>
                <th ng-repeat="attName in result.attNames">
                    @{ attName }@
                </th>
            </tr>

            <tr ng-repeat="attValues in result.attValues">
                <td ng-repeat="attValue in attValues">
                    @{ attValue }@
                </td>
            </tr>

        </table>

    </div>

</div>