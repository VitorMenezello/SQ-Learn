<div id="datatable" class="datatable" ng-controller="DatatableController">

    <div class="datatable-title" layout="row" layout-align="center center">

        <h3>
            Resultados
        </h3>

    </div>

    <div class="datatable-content">

        <div class="datatable-messages" ng-if="!result">
            <span ng-if="error === ''" class="no-results">
                Nenhuma query computada.
            </span>

            <span ng-if="error !== ''" class="error">
                Ocorreu um erro: @{ error }@
            </span>
        </div>

        <div class="datatable-stats" ng-if="result">
            <span>
                Número de resultados:
            </span>
            <span class="number first">
                @{ rows }@
            </span>
            <span>
                Número de colunas:
            </span>
            <span class="number">
                @{ columns }@
            </span>
        </div>

        <table ng-if="result">

            <tr class="table-header">
                <th ng-repeat="attName in attNames">
                    @{ attName }@
                </th>
            </tr>

            <tr class="table-content" ng-repeat="attValues in attValues">
                <td ng-repeat="attValue in attValues">
                    @{ attValue }@
                </td>
            </tr>

        </table>

    </div>

</div>