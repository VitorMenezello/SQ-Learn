<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>SQ-Learn - @yield('title')</title>

    @component('components.javascripts')
    @endcomponent

    <!-- TODO: fix assets -->
    <script>
        let app = angular.module('App', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngMdIcons'])

            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('@{').endSymbol('}@');
            })
    </script>

    @yield('scripts')

    @component('components.stylesheets')
    @endcomponent

    <style>
        body {
            margin: 0;
            height: 100%;
            min-height: 100%;
        }

        .header-container {
            background-color: #C83232;
            color: #FEFEFE;
            height: 80px;
        }

        .logo {
            text-align: center;
        }

        .menu ul {
            list-style-type: none;
        }

        .menu ul li {
            padding-left: 20px;
            padding-right: 20px;
            display: inline-block;
        }

        .content-container {
        }

        .content {
            padding: 20px 100px;
        }

        .card {
            margin: 50px;
        }

        md-card {
            border-radius: 15px;
            background-color: #EEEEEE;
        }

        .center {
            text-align: center;
        }

        .learn ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

    </style>

    @yield('stylesheets')

</head>

<html>
<body ng-app="App">

@component('components.menu')
@endcomponent

@yield('body')

@component('components.footer')
@endcomponent

</body>
</html>