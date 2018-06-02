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

    <style>
        body {
            margin: 0;
            height: 100%;
            min-height: 100%;
        }

        .header-container {
            background-color: #C83232;
            color: #FEFEFE;
            text-align: center;
            height: 150px;
        }

        .header-container.subtitulo {
            position: absolute;
            bottom: 0;
        }

        .content {
            background-color: #FDFDFD;
            padding: 20px 100px;
        }

        .card {
            margin: 50px;
        }

        md-card {
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

@yield('body')

</body>
</html>