@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script>
        app.controller('TutorialController', function ($scope) {

        });
    </script>
@endsection

@section('stylesheets')
    <style>
        body {
            margin: 0;
            height: 100%;
            min-height: 100%;
            background-color: #C83232;
        }

        .header-container {
            color: #FEFEFE;
            text-align: center;
            height: 150px;
        }

        .content-container {
            background-color: #C83232;
        }

        .content {
            padding: 20px 100px;
        }

        .center {
            text-align: center;
        }

    </style>
@endsection

@section('body')

    <div ng-controller="TutorialController">

        <div layout="row" layout-align="center end" class="header-container">

            <div flex>
                <h1>
                    Tutorial SQL
                </h1>
            </div>

        </div>

        <md-content class="content-container">

            <div class="content" layout="row">

                <p>Lorem Ipsum</p>

            </div>

            <div class="footer">

            </div>

        </md-content>

    </div>

@endsection