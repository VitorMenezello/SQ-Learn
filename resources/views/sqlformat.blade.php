@extends('base')

@section('title', 'SQL Format')

@section('scripts')
    <script src="{{ url('/angularjs/controllers/sqlformat.js') }}"></script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/sqlformat.css') }}">
@endsection

@section('body')

    <div ng-controller="SQLFormatController" id="sqlformat" class="full-height">

        <md-content class="format-container" layout="row">

            <div flex="75" layout="column" class="full-height">

                @component('components.format')
                @endcomponent

            </div>

            <div flex="25" class="full-height">

                @component('components.format-options')
                @endcomponent

            </div>

        </md-content>

    </div>

@endsection