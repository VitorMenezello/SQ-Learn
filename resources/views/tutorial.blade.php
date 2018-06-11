@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script src="{{ url('/angularjs/constants/lessons.js') }}"></script>
    <script src="{{ url('/angularjs/constants/schemas.js') }}"></script>
    <script src="{{ url('/angularjs/constants/datatables.js') }}"></script>
    <script src="{{ url('/angularjs/tutorial.js') }}"></script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/console.css') }}">
    <link rel="stylesheet" href="{{ url('/css/lesson.css') }}">
    <link rel="stylesheet" href="{{ url('/css/schema.css') }}">
@endsection

@section('body')

    <div ng-controller="TutorialController">

        <md-content class="content-container" layout="row">

            <div flex="35">

                @component('components.lesson')
                @endcomponent

            </div>

            <div flex="35" layout="column">

                @component('components.schema')
                @endcomponent

                @component('components.console')
                @endcomponent

            </div>

            <div flex="30">

                @component('components.datatable')
                @endcomponent

            </div>

        </md-content>

    </div>

@endsection