@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script src="{{ url('/angularjs/constants/lessons.js') }}"></script>
    <script src="{{ url('/angularjs/constants/schemas.js') }}"></script>
    <script src="{{ url('/angularjs/controllers/tutorial.js') }}"></script>
@endsection

@section('stylesheets')
    <link rel="stylesheet" href="{{ url('/css/tutorial.css') }}">
    <link rel="stylesheet" href="{{ url('/css/console.css') }}">
    <link rel="stylesheet" href="{{ url('/css/lesson.css') }}">
    <link rel="stylesheet" href="{{ url('/css/schema.css') }}">
@endsection

@section('body')

    <div ng-controller="TutorialController">

        <md-content class="content-container" layout="row">

            <div flex="40">

                @component('components.lesson')
                @endcomponent

            </div>

            <div flex="60" layout="column">

                <md-tabs md-border-bottom md-stretch-tabs="always" md-no-pagination flex="80">

                    <md-tab>

                        <md-tab-label>
                            Esquema Relacional
                        </md-tab-label>

                        <md-tab-body>
                            @component('components.schema')
                            @endcomponent
                        </md-tab-body>

                    </md-tab>

                    <md-tab>

                        <md-tab-label>
                            Resultados
                        </md-tab-label>

                        <md-tab-body>
                            @component('components.datatable')
                            @endcomponent
                        </md-tab-body>

                    </md-tab>

                </md-tabs>

                <div flex="20">
                    @component('components.console')
                    @endcomponent
                </div>

            </div>

        </md-content>

    </div>

@endsection