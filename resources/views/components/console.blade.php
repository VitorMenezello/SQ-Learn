<div id="console" class="console" ng-controller="ConsoleController" ng-class="{'hidden': consoleOculto}">

    <form id="form-console" name="form-console" ng-submit="console()">

        <div class="console-label" ng-click="triggerConsole()">
            <span><strong>user</strong>@sqlearn:pgsql></span>
            <md-icon ng-class="{'hidden': !consoleOculto}" md-svg-src="{{ url('/icons/chevron-up.svg') }}" aria-label="Abrir"></md-icon>
        </div>

        <div class="query-history" onclick="document.getElementById('console-input').focus(); return false;">
            <span ng-repeat="query in previousQueries | reverse track by $index">
                @{ query }@
            </span>
        </div>

        <md-input-container class="console-text" ng-class="{'hidden': consoleOculto}">
            <input aria-label="Query console"
                   id="console-input"
                   name="console"
                   ng-model="consoleQuery"
                   ng-keydown="$event.keyCode === 13 && query()
                   || $event.keyCode === 38 && upKey()
                   || $event.keyCode === 40 && downKey()">
        </md-input-container>

    </form>

</div>