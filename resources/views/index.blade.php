@extends('base')

@section('title', 'Index')

@section('scripts')
    <script>
        app.controller('IndexController', function ($scope) {

        });
    </script>
@endsection

@section('stylesheets')
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

        .header-container.subtitle {
            position: absolute;
            bottom: 0;
        }

        .content-container {
            background-color: #FDFDFD;
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
@endsection

@section('body')

    <div ng-controller="IndexController">

        <div layout="row" layout-align="center end" class="header-container">

            <div flex="50" class="logo">
                <!-- img -->
                <h1>
                    SQ-Learn
                </h1>
            </div>

            <div flex="50" class="subtitle">
                <p>
                    Aprendizado interativo e consultas a bancos de dados
                </p>
            </div>

        </div>

        <md-content class="content-container">

            <div class="content" layout="row">

                <div flex="70" class="card practice">

                    <md-card>

                        <md-card-title>

                            <md-card-title-text class="center">
                                <span class="md-headline">Pratique SQL</span>
                            </md-card-title-text>

                        </md-card-title>

                    </md-card>

                </div>

                <div flex="30" class="card learn">
                    <md-card>

                        <md-card-title>

                            <md-card-title-text class="center">
                                <span class="md-headline">Aprenda</span>
                            </md-card-title-text>

                        </md-card-title>

                        <md-card-content layout="row">
                            <ul flex>
                                <li>> <a href="/tutorial">Select</a></li>
                                <li>> Where</li>
                                <li>> Funções de Agregação</li>
                                <li>> Consultas Aninhadas</li>
                                <li>> Join</li>
                            </ul>
                        </md-card-content>

                    </md-card>
                </div>

            </div>

            <div class="footer center">
                <p>Desenvolvido por Lívia Almeida e Vitor Menezello sob orientação da professora Mirella M. Moro</p>
            </div>

        </md-content>


    </div>

@endsection