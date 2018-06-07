@extends('base')

@section('title', 'Index')

@section('scripts')
    <script src="{{ url('/angularjs/index.js') }}"></script>
@endsection

@section('stylesheets')
@endsection

@section('body')

    <div ng-controller="IndexController">

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

        </md-content>

    </div>

@endsection