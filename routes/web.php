<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
    //TODO: index
});

$router->get('/', function (){
    return view('index');
});

$router->get('/tutorial', 'SchemaController@tutorialView');

$router->get('/praticando', 'SchemaController@praticandoView');

$router->get('/sqlook', 'SchemaController@sqlookView');

$router->get('/sql-format', function (){
    return view('sql-format');
});

$router->post('/post-query', 'SchemaController@postQueryAjax');