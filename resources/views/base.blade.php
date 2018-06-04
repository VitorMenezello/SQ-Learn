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
        /* Everythin */
        body {
            margin: 0;
            height: 100%;
            min-height: 100%;
        }

        .header-container {
            background-color: #C83232;
            color: #FEFEFE;
            height: 80px;
            padding-left: 100px;
            padding-right: 100px;
        }

        .logo {
            height: inherit;
        }

        .logo-button {
            margin-top: 10px;
            margin-bottom: 10px;
            padding-bottom: 10px;
            padding-top: 12px;
            height: 60px;
            font-size: 30px;
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

        .right {
            text-align: right;
        }

        .learn ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        /* Console */

        .console-label {
            background-color: #9B9B9B;
        }

        .console textarea {
            background-color: #464646;
            color: #FEFEFE;
            height: 100px;
            max-height: 100px;
        }

        md-input-container {
            margin: 0;
            padding: 0;
        }

        md-input-container:not(.md-input-invalid).md-input-focused .md-input{
            border-color: #464646;
        }

        /* Lesson */

        .lesson {
            background-color: #C83232;
            color: #FEFEFE;
        }

        .lesson-content {
            background-color: #C85050;
        }

        .lesson-content-text {
            padding: 20px;
            text-align: justify;
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