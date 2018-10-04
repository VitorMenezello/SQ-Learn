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

        <a class="navitem" href="sq-look" ng-class="{'current-page': currentPage === 'sq-look'}">
            SQ-Look
        </a>

    </div>

    <div flex="20" class="logo" layout="column" layout-align="center center">

        <md-button class="logo-button" href="." layout="row" layout-align="center center">
            <img src="{{ url('/images/sq-learn-logo.png') }}" href="/">
            <span class="logo-text">
                SQ-Learn
            </span>
        </md-button>

    </div>

</div>
