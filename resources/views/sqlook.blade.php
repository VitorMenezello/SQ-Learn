@extends('base')

@section('title', 'SQLook')

@section('scripts')
    <script src="{{ url('/angularjs/controllers/sqlook.js') }}"></script>
    <script>
        let closeIconUrl = '{{ url('/icons/close.svg') }}';
        let plusCircleIconUrl = '{{ url('/icons/plus-circle.svg') }}';
        let filtersDialogTemplate = '{{ url('/dialogs/filters.html') }}';
        let labelsDialogTemplate = '{{ url('/dialogs/labels.html') }}';
        let functionsDialogTemplate = '{{ url('/dialogs/functions.html') }}';
        let joinsDialogTemplate = '{{ url('/dialogs/joins.html') }}';
        let schemas = @json($schemas);
    </script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/sqlook.css') }}">
@endsection

@section('body')

    <div ng-controller="SQLookController" id="sqlook" class="full-height">

        <md-content class="content-container" layout="row">

            <div flex="66" layout="column" class="full-height">

                @component('components.schema-select')
                @endcomponent

                <div flex>

                    @component('components.schema-query')
                    @endcomponent

                </div>

            </div>

            <div flex="33" class="full-height">

                @component('components.datatable')
                @endcomponent

            </div>

        </md-content>

        @component('components.run-query')
        @endcomponent

    </div>

@endsection