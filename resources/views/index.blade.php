@extends('base')

@section('title', 'Index')

@section('scripts')
    <script>
        app.controller('IndexController', function ($scope) {

        });
    </script>
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

        <md-content class="content" layout="row">

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

                        <md-card-title-text>
                            <span class="md-headline">Aprenda</span>
                        </md-card-title-text>

                    </md-card-title>

                    <md-card-content layout="row">
                        <ul>
                            <li>> Select</li>
                            <li>> Where</li>
                            <li>> Funções de Agregação</li>
                            <li>> Consultas Aninhadas</li>
                            <li>> Join</li>
                        </ul>
                    </md-card-content>

                </md-card>
            </div>

        </md-content>

        <div class="footer">

        </div>

    </div>

@endsection