@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script>
        app.controller('TutorialController', function ($scope) {
            $scope.licoes = [
                {
                    titulo: "SELECT",
                    conteudo: "SQL é uma linguagem de manipulação de dados em bancos de dados relacionais. Aqui você irá aprender a fazer buscas em bancos usando o comando SELECT. Ao lado você pode ver o esquema do banco sobre cartoons que iremos usar e há um console para que você possa praticar o que aprendeu em tempo real. " +
                    "Para entender como funciona o SELECT, vamos fazer algo simples: selecionar o nome de todos os cartoons do banco: SELECT name FROM cartoon; " +
                    "Faça o mesmo, desta vez selecionando o nome de todas as companhias produtoras de cartoons",
                    licaoSeguinte: true,
                    licaoAnterior: false,
                    resposta: "SELECT * FROM cartoon;"
                },
                {
                    titulo: "Mais SELECT",
                    conteudo: "Como você viu, primeiro selecionamos os campos e dizemos em qual tabela eles estão. Você pode selecionar mais campos colocando vírgulas entre seus nomes, e até mesmo renomeá-los usando a palavra AS, como abaixo: SELECT id,name AS nome FROM cartoon; " +
                    "Uma maneira de selecionar todos os campos de um tabela sem ter que digitá-los um por um é usar *: SELECT * FROM producerCompany; " +
                    "Tente obter a tabela de gêneros, renomeando o campo genreName como Gênero",
                    licaoSeguinte: false,
                    licaoAnterior: true,
                    resposta: "SELECT * FROM cartoon;"
                }
            ];

            $scope.numeroLicao = 0;

            $scope.licao = $scope.licoes[$scope.numeroLicao];

            $scope.nextLesson = function () {
                $scope.numeroLicao++;
                $scope.licao = $scope.licoes[$scope.numeroLicao];
            };

            $scope.previousLesson = function () {
                $scope.numeroLicao--;
                $scope.licao = $scope.licoes[$scope.numeroLicao];
            };
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