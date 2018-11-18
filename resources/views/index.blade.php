@extends('base')

@section('title', 'Index')

@section('scripts')
    <script src="{{ url('/angularjs/controllers/index.js') }}"></script>
@endsection

@section('stylesheets')
@endsection

@section('body')

    <div ng-controller="IndexController" id="index">

        <md-content class="content-container" layout="row">

            Todo

        </md-content>

    </div>

@endsection