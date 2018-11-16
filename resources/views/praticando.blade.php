@extends('base')

@section('title', 'Praticando SQL')

@section('scripts')
    <script src="{{ url('/angularjs/controllers/praticando.js') }}"></script>
    <script>
        let schemas = @json($schemas);
    </script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/praticando.css') }}">
@endsection

@section('body')

    <div ng-controller="PraticandoController" class="full-height">

        <md-content class="content-container" layout="row">

            <div flex="66" layout="column" class="full-height">
                @component('components.schema-select')
                @endcomponent

                <div flex>
                    @component('components.schema')
                    @endcomponent
                </div>
            </div>

            <div flex="33" class="full-height">
                @component('components.datatable')
                @endcomponent
            </div>

        </md-content>

        <div>
            @component('components.console')
            @endcomponent
        </div>

    </div>

@endsection