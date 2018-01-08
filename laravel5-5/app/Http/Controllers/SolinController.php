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

	public function allDepartamento($idDepartamento)
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

	public function DepartamentoEstado($idDepartamento,$estado)
	{
		
		
		$data = DB::select('SELECT solins.id, solins.folio, solins.proyecto_id, proyectos.name AS proyecto, departamentos.name AS departamento, solins.periodo_id, solins.monto, solins.descrpcion, solins.pago, solins.n_pago, solins.status FROM solins INNER JOIN proyectos ON proyectos.id = solins.proyecto_id INNER JOIN users ON users.id=solins.usuario_cr_id INNER JOIN departamentos ON users.departamento_id=departamentos.id WHERE users.departamento_id='+$idDepartamento+' AND solins.status='+$estado);
		if (!$data) {
			return response()->json(['No se encontro el Solin',404],404);
		}
		$data1 = DB::select('SELECT  solins.id, solins.usuario_cr_id, users.name FROM solins INNER JOIN users ON users.id = solins.usuario_cr_id WHERE users.departamento_id='+$idDepartamento+' AND solins.status='+$estado);
		/*$data2 = DB::select('SELECT  solins.id, solins.usuario_c_id, users.name FROM solins INNER JOIN users ON users.id = solins.usuario_c_id WHERE solins.usuario_cr_id='+$+' AND solins.status='+$estado);
		return response()->json([$data],200);
		$data3 = DB::select('SELECT  solins.id, solins.usuario_a_id, users.name FROM solins INNER JOIN users ON users.id = solins.usuario_a_id WHERE solins.usuario_cr_id='+$+' AND solins.status='+$estado);*/

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
	public function store(Request $request)
	{
		//
		if (!$request->get('folio')) {
			return response()->json(['faltan datos',422],422);
		}
		
		Solin::create($request->all());
		return response()->json(['se ha creado al usuario'],200);
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
