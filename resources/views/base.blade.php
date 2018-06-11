<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>SQ-Learn - @yield('title')</title>

    @component('components.javascripts')
    @endcomponent

    <script src="{{ url('/angularjs/app.js') }}"></script>

    @yield('scripts')

    @component('components.stylesheets')
    @endcomponent

    <link rel="stylesheet" href="{{ url('/css/base.css') }}">

    <style>
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