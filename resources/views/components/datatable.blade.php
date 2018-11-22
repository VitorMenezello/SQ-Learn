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

        <table ng-show="result">

            <thead>
                <tr class="table-header">
                    <th ng-repeat="attName in attNames">
                        @{ attName }@
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr class="table-content" ng-repeat="attValues in attValues">
                    <td ng-repeat="attValue in attValues">
                        @{ attValue }@
                    </td>
                </tr>
            </tbody>

        </table>

        <div ng-show="result" class="pagination">

            <md-input-container class="items">
                <label>Itens por página</label>
                <md-select ng-model="items"
                           class="md-no-underline"
                           aria-label="Item limit"
                           ng-change="selectLimit()"
                           ng-disabled="loading">
                    <md-option ng-repeat="value in itemsOptions" ng-value="value">
                        @{ value }@
                    </md-option>
                </md-select>
            </md-input-container>

            <md-icon md-svg-src="{{ url('/icons/chevron-left.svg') }}"
                     ng-class="{'disabled': page === 1 || loading}"
                     ng-click="prevPage()"
                     aria-label="Previous Page"></md-icon>

            <md-input-container>
                <label>Página</label>
                <md-select ng-model="page"
                           class="md-no-underline"
                           aria-label="Page"
                           ng-change="postQuery()"
                           ng-disabled="loading">
                    <md-option ng-repeat="n in pageRange()" ng-value="n">
                        @{ n }@
                    </md-option>
                </md-select>
            </md-input-container>

            <md-icon md-svg-src="{{ url('/icons/chevron-right.svg') }}"
                     ng-class="{'disabled': page === pages || loading}"
                     ng-click="nextPage()"
                     aria-label="Next Page"></md-icon>

        </div>

    </div>

</div>