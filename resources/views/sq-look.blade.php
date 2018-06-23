@extends('base')

@section('title', 'Praticando SQL')

@section('scripts')
    <script src="{{ url('/angularjs/constants/schemas.js') }}"></script>
    <script src="{{ url('/angularjs/controllers/sq-look.js') }}"></script>
    <script>
        let closeIconUrl = '{{ url('/icons/close.svg') }}';
        let plusCircleIconUrl = '{{ url('/icons/plus-circle.svg') }}';
        let filtersDialogTemplate = '{{ url('/dialogs/filters.html') }}';
        let labelsDialogTemplate = '{{ url('/dialogs/labels.html') }}';
        let functionsDialogTemplate = '{{ url('/dialogs/functions.html') }}';
        let joinsDialogTemplate = '{{ url('/dialogs/joins.html') }}'
    </script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/console.css') }}">
    <link rel="stylesheet" href="{{ url('/css/schema.css') }}">
    <link rel="stylesheet" href="{{ url('/css/dialogs.css') }}">
    <link rel="stylesheet" href="{{ url('/css/run-query.css') }}">
@endsection

@section('body')

    <div ng-controller="SQLookController">

        <md-content class="content-container" layout="column">

            <div flex="80" layout="row">

                <div id="schema-select" class="schema-select" flex="70" layout="column">
                    @component('components.schema-select')
                    @endcomponent

                    <div flex>
                        @component('components.schema-query')
                        @endcomponent
                    </div>
                </div>

                <div flex="30">
                    @component('components.datatable')
                    @endcomponent
                </div>

            </div>

            <div flex="20">
                @component('components.run-query')
                @endcomponent
            </div>

        </md-content>

    </div>

@endsection