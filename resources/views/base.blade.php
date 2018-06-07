<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>SQ-Learn - @yield('title')</title>

    @component('components.javascripts')
    @endcomponent

    <!-- TODO: fix assets -->
    <script>
        let app = angular.module('App', ['ngMaterial'])

            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('@{').endSymbol('}@');
            })
    </script>

    @yield('scripts')

    @component('components.stylesheets')
    @endcomponent

    <style>
        /* Everything */
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

        /* Schema */

        .schema-table ul {
            list-style-type: none;
        }

        .schema-underline {
            text-decoration: underline;
        }

        .schema-table .title-1 {
            background-color: #FF88BA;
        }

        .schema-table .content-1 {
            background-color: #FF9EC8;
        }

        .schema-table .title-2 {
            background-color: #66AAAA;
        }

        .schema-table .content-2 {
            background-color: #8CBFBF;
        }

        .schema-table .title-3 {
            background-color: #FFED77;
        }

        .schema-table .content-3 {
            background-color: #F7F39E;
        }

        .schema-table .title-4 {
            background-color: #65AA65;
        }

        .schema-table .content-4 {
            background-color: #8BBC8B;
        }

        .schema-table .title-5 {
            background-color: #FFAB55;
        }

        .schema-table .content-5 {
            background-color: #FFBE7B;
        }

        .schema-table .title-6 {
            background-color: #CC89EF;
        }

        .schema-table .content-6 {
            background-color: #D5A5F8;
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