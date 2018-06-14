<div id="lesson" layout="row" layout-align="space-between center" class="header-container">

    <div ng-controller="MenuController">

        <md-menu>

            <md-button aria-label="SQ-Look menu" class="md-icon-button menu-button" ng-mouseenter="$mdMenu.open()">
                <md-icon md-svg-icon="menu"></md-icon>
            </md-button>

            <md-menu-content width="3" ng-mouseleave="$mdMenu.close()">

                <md-menu-item>
                    <md-button>
                        <a href="/tutorial" ng-class="{'current-page': currentPage === 'tutorial'}">
                            <md-icon md-svg-icon="school"></md-icon>
                            <span>
                                Tutorial
                            </span>
                        </a>
                    </md-button>
                </md-menu-item>

                <md-menu-item>
                    <md-button>
                        <a href="/praticando" ng-class="{'current-page': currentPage === 'praticando'}">
                            <md-icon md-svg-icon="database"></md-icon>
                            <span>
                                Praticando
                            </span>
                        </a>
                    </md-button>
                </md-menu-item>

                <md-menu-item>
                    <md-button>
                        <a href="/sq-look" ng-class="{'current-page': currentPage === 'sq-look'}">
                            <md-icon md-svg-icon="magnify"></md-icon>
                            <span>
                                SQ-Look
                            </span>
                        </a>
                    </md-button>
                </md-menu-item>

            </md-menu-content>

        </md-menu>

    </div>

    <div flex="20" class="logo" layout="column" layout-align="center center">

        <md-button class="logo-button" href="/" layout="row" layout-align="center center">
            <img src="{{ url('/images/sq-learn-logo.png') }}" href="/">
            <span class="logo-text">
                SQ-Learn
            </span>
        </md-button>

    </div>

</div>