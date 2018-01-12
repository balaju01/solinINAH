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

	public function DepartamentoEstado($idDepartamento,$periodo,$estado)
	{
		
		
		$data = DB::select('SELECT solins.id, departamentos.name, solins.folio, solins.proyecto_id, proyectos.name AS proyectoNombre, solins.usuario_cr_id, U1.name AS creador, solins.usuario_c_id, U2.name AS confirmador, solins.usuario_a_id, U3.name AS autorizador, solins.periodo_id, solins.monto, solins.montoL, solins.descripcion, solins.pago, solins.n_pago, solins.status, recursos.periodo_id, periodos.name FROM solins  INNER JOIN proyectos ON proyectos.id = solins.proyecto_id INNER JOIN deptos__proyectos ON deptos__proyectos.proyecto_id = proyectos.id INNER JOIN departamentos ON departamentos.id = deptos__proyectos.departamento_id INNER JOIN recursos ON recursos.proyecto_id = proyectos.id INNER JOIN periodos ON recursos.periodo_id = periodos.id INNER JOIN users U1 ON U1.id = solins.usuario_cr_id INNER JOIN users U2 ON U2.id = solins.usuario_c_id INNER JOIN users U3 ON U3.id = solins.usuario_a_id WHERE departamentos.id = '.$idDepartamento.' AND periodos.id = '.$periodo.' AND solins.status = '.$estado);
		if(!$data){
			return response()->json(['No hay Solines',404],404);
		}
		return response()->json([$data],200);

	}

	public function ContSolinPeriodo($periodo)
	{
		$data = DB::select('SELECT COUNT (id) FROM solins WHERE periodo_id = '+$periodo);
		if (!$data) {
			return response()->json(['No se encontraron solines',404],404);
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
	public function store(Request $request)
	{
		//
		if (!$request->get('folio')) {
			return response()->json(['faltan datos',422],422);
		}
		
		Solin::create($request->all());
		return response()->json(['se ha creado el solin'],200);
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
