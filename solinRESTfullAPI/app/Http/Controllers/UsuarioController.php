<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller {

	public function __construct()
	{
		$this->middleware('auth.basic');
	}

	/**
	 * Display a listing of the resource.
	 *Hash::make('admin')
	 * @return Response
	 */
	public function index()
	{
		//Se muestran todos los usuarios
		$data = DB::select('SELECT  users.id, users.name, departamentos.id AS id_departamento, users.email, users.password, departamentos.name AS departamento  FROM users INNER JOIN departamentos ON departamentos.id = users.departamento_id');
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
	public function store(Request $request)
	{
		//
		if (!$request->get('name')) {
			return response()->json(['faltan datos',422],422);
		}
		User::create($request->all());
		return response()->json(['se ha creado al usuario'],200);
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
