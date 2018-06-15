@extends('base')

@section('title', 'Praticando SQL')

@section('scripts')
    <script src="{{ url('/angularjs/constants/schemas.js') }}"></script>
    <script src="{{ url('/angularjs/controllers/praticando.js') }}"></script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/console.css') }}">
    <link rel="stylesheet" href="{{ url('/css/schema.css') }}">
@endsection

@section('body')

    <div ng-controller="PraticandoController">

        <md-content class="content-container" layout="column">

            <div flex="80" layout="row">

                <div id="schema-select" class="schema-select" flex="60" layout="column">
                    @component('components.schema-select')
                    @endcomponent

                    <div flex>
                        @component('components.schema')
                        @endcomponent
                    </div>
                </div>

                <div flex="40">
                    @component('components.datatable')
                    @endcomponent
                </div>

            </div>

            <div flex="20">
                @component('components.console')
                @endcomponent
            </div>

        </md-content>

    </div>

@endsection