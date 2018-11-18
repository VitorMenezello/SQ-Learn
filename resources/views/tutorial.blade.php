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

    <div ng-controller="TutorialController" id="tutorial" class="full-height">

        <md-content class="content-container" layout="row">

            <div flex="33" class="full-height toggle-sidenav" ng-class="{'left': toggle}">

                @component('components.lesson')
                @endcomponent

            </div>

            <div flex="66" class="full-height anchor">

                <div class="toggle lesson-button" ng-class="{'disabled': !toggle}" ng-click="toggleSidenav(false)">
                    <md-icon md-svg-src="{{ url('/icons/bookmark.svg') }}"></md-icon>
                </div>

                <div class="toggle datatable-button" ng-class="{'disabled': toggle}" ng-click="toggleSidenav(true)">
                    <md-icon md-svg-src="{{ url('/icons/table.svg') }}"></md-icon>
                </div>

                @component('components.schema')
                @endcomponent

            </div>

            <div flex="33" class="full-height toggle-sidenav" ng-class="{'right': !toggle}">

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