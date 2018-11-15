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

                {{--<md-tabs md-border-bottom md-stretch-tabs="always" md-no-pagination flex="80">--}}

                    {{--<md-tab>--}}

                        {{--<md-tab-label>--}}
                            {{--Esquema Relacional--}}
                        {{--</md-tab-label>--}}

                        {{--<md-tab-body>--}}
                            {{--@component('components.schema')--}}
                            {{--@endcomponent--}}
                        {{--</md-tab-body>--}}

                    {{--</md-tab>--}}

                    {{--<md-tab>--}}

                        {{--<md-tab-label>--}}
                            {{--Resultados--}}
                        {{--</md-tab-label>--}}

                        {{--<md-tab-body>--}}
                            {{--@component('components.datatable')--}}
                            {{--@endcomponent--}}
                        {{--</md-tab-body>--}}

                    {{--</md-tab>--}}

                {{--</md-tabs>--}}

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