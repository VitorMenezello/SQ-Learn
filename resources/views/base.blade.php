<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>SQ-Learn - @yield('title')</title>

    @component('javascripts')
    @endcomponent

    <!-- TODO: fix assets -->
    <script>
        let app = angular.module('App', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngMdIcons'])

            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('@{').endSymbol('}@');
            })

    </script>

    @yield('scripts')


    @component('stylesheets')
    @endcomponent

    @yield('stylesheets')

</head>

<html>
<body ng-app="App">

@yield('body')

</body>
</html>