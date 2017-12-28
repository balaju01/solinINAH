<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'cors'],function(){
	Route::post('/auth_login', 'ApiAuthController@userAuth');
});

Route::resource('users','UsuarioController');
Route::get('/user/{Nombre}', 'UsuarioController@showUser');

Route::resource('departamentos','DepartamentoController');
Route::get('/departamento/{Nombre}', 'DepartamentoController@showName');

Route::resource('proyectos','ProyectoController');
Route::get('/proyectos/{proyectos}/saldo/periodo/{periodo}', 'ProyectoController@SaldoAsignadoProyecto');
Route::get('/proyectos/periodo/{periodo}/departamento/{departamento}','ProyectoController@ProyectosDepartamento');

Route::resource('users.solins','SolinController');
Route::get('/departamento/{departamento}/solins/estado/{estado}', 'SolinController@DepartamentoEstado');
Route::get('/solins/estado/{estado}', 'SolinController@Estado');

Route::resource('periodos','PeriodoController');