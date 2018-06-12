<div layout="row" layout-align="space-between center" class="header-container">

    <md-menu ng-controller="MenuController">

        <md-button aria-label="SQ-Look menu" class="md-icon-button" ng-click="$mdMenu.open()">
            <md-icon md-svg-icon="menu"></md-icon>
        </md-button>

        <md-menu-content width="3">

            <md-menu-item>
                <md-button>
                    <a href="/tutorial">
                        <md-icon md-svg-icon="school"></md-icon>
                        <span ng-class="{'current-page': currentPage === 'tutorial'}">
                            Tutorial
                        </span>
                    </a>
                </md-button>
            </md-menu-item>

            <md-menu-item>
                <md-button>
                    <a href="/praticando">
                        <md-icon md-svg-icon="database"></md-icon>
                        <span ng-class="{'current-page': currentPage === 'praticando'}">
                            Praticando
                        </span>
                    </a>
                </md-button>
            </md-menu-item>

            <md-menu-item>
                <md-button>
                    <a href="/sq-look">
                        <md-icon md-svg-icon="magnify"></md-icon>
                        <span ng-class="{'current-page': currentPage === 'sq-look'}">
                            SQ-Look
                        </span>
                    </a>
                </md-button>
            </md-menu-item>

        </md-menu-content>

    </md-menu>

    <div flex="20" class="logo" layout="column" layout-align="center center">

        <md-button class="logo-button" href="/" layout="row" layout-align="center center">
            <img src="{{ url('/images/sq-learn-logo.png') }}" href="/">
            <span class="logo-text">
                SQ-Learn
            </span>
        </md-button>

    </div>

</div>