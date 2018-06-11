<div class="datatable">

    <div layout="row" class="schema-title" layout-align="center start">

        <h3>
            Resultados
        </h3>

    </div>

    <div layout="row" layout-align="center center">

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