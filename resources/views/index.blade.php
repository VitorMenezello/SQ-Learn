@extends('base')

@section('title', 'Index')

@section('scripts')
    <script src="{{ url('/angularjs/controllers/index.js') }}"></script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/index.css') }}">
@endsection

@section('body')

    <div ng-controller="IndexController" id="index">

        <md-content class="index-container">

            <div class="section s-1" layout="row">
                <div class="section-text" flex="60">
                    <h3>Novo SQLearn</h3>
                    <p>
                        O SQLearn foi desenvolvido para substituir o antigo site Praticando SQL. A plataforma possui os
                        mesmos objetivos, mas realizamos uma mudança completa no visual e adicionamos diversas novas
                        funcionalidades ao site, incluindo um tutorial próprio.
                    </p>
                </div>
                <img flex="40" src="{{ url('/images/bancodedados.svg') }}">
            </div>

            <div class="section s-2" layout="row">
                <img flex="40" src="{{ url('/images/caixas.svg') }}">
                <div class="section-text" flex="60">
                    <h3>SQLook</h3>
                    <p>
                        O novo site conta um Construtor Visual de Consultas SQL, chamado de SQLook. Para os iniciantes,
                        ela é uma plataforma perfeita para começar a criar suas consultas e entender o funcionamento da
                        linguagem sem a necessidade de conhecer a sintaxe previamente.
                    </p>
                </div>
            </div>

            <div class="section s-3" layout="row">
                <div class="section-text" flex="60">
                    <h3>Atualizações</h3>
                    <p>
                        Além disso, o site receberá constantes atualizações com melhorias e mais ferramentas para
                        tornar os seus estudos de SQL mais fáceis ainda. Todo o código do site ficará em repositório
                        aberto ao público para que todos possam reportar bugs e erros.
                    </p>
                </div>
                <img src="{{ url('/images/engrenagemmagra.svg') }}">
            </div>

        </md-content>

        <div>
            @component('components.footer')
            @endcomponent
        </div>

    </div>

@endsection