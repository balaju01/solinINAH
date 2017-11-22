<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Solin;
use App\User;
use Illuminate\Http\Request;

class SolinController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function showAll()
	{
		//se muestran todos los solines
		$data = Solin::all();
		if (!$data) {
			return response()->json(['No hay solines',404],404);
		}
		return response()->json([$data],200);
	}

	public function index($id)
	{
		//mostrar todos los solines de un usuario
		$usr = DB::select('SELECT * FROM solins WHERE usuario_cr_id = '.$id);
		
		if (!$usr) {
			return response()->json(['No se encontro el Usuario',404],404);
		}
		return response()->json([$usr],200);
	}

	public function UsuarioEstado($idUsuario,$estado)
	{
		$data = DB::select('SELECT * FROM solins WHERE usuario_cr_id = '.$idUsuario.' AND status = '.$estado );
		if (!$data) {
			return response()->json(['No se encontro el Solin',404],404);
		}
		return response()->json([$data],200);

	}

	public function Estado($estado)
	{
		$data = DB::select('SELECT * FROM solins WHERE status = '.$estado);
		if (!$data) {
			return response()->json(['No se encontraron Solines con ese estado',404],404);
		}
		return response()->json([$data],200);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		//crear solin de un usuario
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
	public function show($idUsuario,$idSolin)
	{
		//mostrar un solin de un usuario
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($idUsuario,$idSolin)
	{
		//editar un solin de un usuario
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($idUsuario,$idSolin)
	{
		//actualizar un solin de un usuario
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($idUsuario,$idSolin)
	{
		//eliminar solin de un usuario
	}

}
