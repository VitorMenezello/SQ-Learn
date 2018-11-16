@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script src="{{ url('/angularjs/controllers/tutorial.js') }}"></script>
    <script>
        let schema = @json($schema);
        let lessons = @json($lessons);
    </script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/tutorial.css') }}">
@endsection

@section('body')

    <div ng-controller="TutorialController" class="full-height">

        <md-content class="content-container" layout="row">

            <div flex="33" class="full-height">

                @component('components.lesson')
                @endcomponent

            </div>

            <div flex="66" class="full-height">

                @component('components.schema')
                @endcomponent

            </div>

        </md-content>

        <div>
            @component('components.console')
            @endcomponent
        </div>

    </div>

@endsection