@extends('base')

@section('title', 'Tutorial')

@section('scripts')
    <script src="{{ url('/angularjs/tutorial.js') }}">
    </script>
@endsection

@section('stylesheets')
@endsection

@section('body')

    <div ng-controller="TutorialController">

        <md-content class="content-container">

            <div class="content">

                <div layout="row">

                    <div flex="50">

                        @component('components.lesson')
                        @endcomponent

                    </div>

                    <div flex="50" layout="column">

                        @component('components.schema')
                        @endcomponent

                        @component('components.console')
                        @endcomponent

                    </div>

                </div>

            </div>

        </md-content>

    </div>

@endsection