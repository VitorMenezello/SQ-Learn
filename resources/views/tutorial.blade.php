@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script>
        app.controller('TutorialController', function ($scope) {
            $scope.licoes = [
                {
                    titulo: "SELECT",
                    conteudo: "SQL é uma linguagem de manipulação de dados em bancos de dados relacionais. Aqui você irá aprender a fazer buscas em bancos usando o comando SELECT. Ao lado você pode ver o esquema do banco sobre cartoons que iremos usar e há um console para que você possa praticar o que aprendeu em tempo real.",
                    licaoSeguinte: true,
                    licaoAnterior: false,
                    resposta: "SELECT * FROM cartoon;"
                }
            ];

            $scope.licao = $scope.licoes[0];
        });
    </script>
@endsection

@section('stylesheets')
@endsection

@section('body')

    <div ng-controller="TutorialController">

        <md-content class="content-container">

            <div class="content">

                <div layout="row">

                    <div flex="50" layout="column">

                        @component('components.lesson')
                        @endcomponent

                        @component('components.console')
                        @endcomponent

                    </div>

                    <div flex="50">

                        @component('components.schema')
                        @endcomponent

                    </div>

                </div>

            </div>

            <div class="footer">

            </div>

        </md-content>

    </div>

@endsection