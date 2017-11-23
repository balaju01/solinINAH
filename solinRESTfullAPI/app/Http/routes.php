<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');
/*
Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
*/

Route::resource('departamentos','DepartamentoController');
Route::get('/departamento/{Nombre}', 'DepartamentoController@showName');

Route::resource('users','UsuarioController');
Route::get('/user/{Nombre}', 'UsuarioController@showUser');

Route::resource('proyectos','ProyectoController');
Route::get('/proyectos/{proyectos}/saldo/periodo/{periodo}', 'ProyectoController@SaldoAsignadoProyecto');

Route::resource('users.solins','SolinController');
Route::get('/users/{users}/solins/estado/{estado}', 'SolinController@UsuarioEstado');
Route::get('/solins/estado/{estado}', 'SolinController@Estado');

Route::resource('periodos','PeriodoController');