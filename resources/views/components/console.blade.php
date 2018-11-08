<div id="console" class="console" ng-controller="ConsoleController" ng-class="{'hidden': consoleOculto}">

    <form id="form-console" name="form-console" ng-submit="console()">
        <div class="console-label">
            <span><strong>user</strong>@sqlearn:pgsql></span>
            <md-icon ng-class="{'hidden': !consoleOculto}" md-svg-src="{{ url('/icons/chevron-up.svg') }}" aria-label="Abrir" ng-click="triggerConsole()"></md-icon>
        </div>

        <md-input-container md-detect-hidden md-no-autogrow class="console-text" ng-class="{'hidden': consoleOculto}">
            <textarea aria-label="Query console" name="console" ng-model="consoleQuery" md-no-resize ng-model="console"></textarea>
        </md-input-container>
    </form>

</div>