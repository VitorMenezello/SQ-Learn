<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>SQLearn - @yield('title')</title>

    @component('components.javascripts')
    @endcomponent

    <script src="{{ url('/angularjs/app.js') }}"></script>

    @yield('scripts')

    @component('components.stylesheets')
    @endcomponent

    <link rel="stylesheet" href="{{ url('/css/base.css') }}">

    @yield('stylesheets')

</head>

<html>
<body ng-app="App">

@component('components.menu')
@endcomponent

@yield('body')

</body>
</html>