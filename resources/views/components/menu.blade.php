<div id="menu" layout="row" layout-align="space-between center" class="header-container">

    <div ng-controller="MenuController" class="navbar">

        <a class="navitem" href="." ng-class="{'current-page': currentPage === ''}">
            Home
        </a>

        <a class="navitem" href="tutorial" ng-class="{'current-page': currentPage === 'tutorial'}">
            Tutorial
        </a>

        <a class="navitem" href="praticando" ng-class="{'current-page': currentPage === 'praticando'}">
            Praticando
        </a>

        <a class="navitem" href="sqlook" ng-class="{'current-page': currentPage === 'sqlook'}">
            SQLook
        </a>

        <a class="navitem" href="sql-format" ng-class="{'current-page': currentPage === 'sql-format'}">
            SQL Format
        </a>

    </div>

    <div flex="20" class="logo" layout="column" layout-align="center center">

        <a class="logo-button" href="." layout="row" layout-align="center center">
            <img src="{{ url('/images/sqlearn-logo-branco.png') }}" href=".">
        </a>

    </div>

</div>
