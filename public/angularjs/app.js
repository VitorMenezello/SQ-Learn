let app = angular.module('App', ['ngMaterial', 'ngMdIcons'])

    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('@{').endSymbol('}@');
    })

    // Material Design icons
    .config(function ($mdIconProvider) {
        $mdIconProvider.defaultIconSet('/third-party/material-design-icons/mdi.svg');
    });
