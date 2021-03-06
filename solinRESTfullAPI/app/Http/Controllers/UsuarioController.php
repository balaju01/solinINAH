<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UsuarioController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//Se muestran todos los usuarios
		$data=User::all();
		if(!$data){
			return response()->json(['No hay Usuarios',404],404);
		}
		return response()->json([$data],200);
	}

	public function showUser($name)
	{
		//Se busca el usuario por nombre de usuario
		$data=User::where('email',$name) -> first();
		if(!$data){
			return response()->json(['Usuario no existente',404],404);
		}
		return response()->json([$data],200);
		
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//Se busca el usuario por Id
		$data=User::find($id);
		
		if (!$data) {
			return response()->json(['No se encontro el Usuario',404],404);
		}
		return response()->json([$data],200);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
