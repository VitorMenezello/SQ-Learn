<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>SQ-Learn</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-animate.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-aria.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-cookies.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-messages.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-sanitize.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/i18n/angular-locale_pt-br.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.5/angular-material.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-input-masks/3.0.1/angular-input-masks-standalone.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.7.1/angular-material-icons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.js"></script>
    <script src="{{ url('/angularjs/app.js') }}"></script>
    <script src="{{ url('/angularjs/index.js') }}"></script>

</head>

<html>
    <body ng-app="App">
        <div ng-controller="IndexController">
            <h1>Oi, <?php echo $name; ?></h1>
            <p>{{ amor }}</p>
        </div>
    </body>
</html>