<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Proyecto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProyectoController extends Controller {

	/*public function __construct()
	{
		$this->middleware('auth.basic');
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//Muestra todos los proyectos
		$data=Proyecto::all();
		if(!$data){
			return response()->json(['No hay Proyectos',404],404);
		}
		return response()->json([$data],200);
	}

	public function SaldoAsignadoProyecto($idProyecto,$idPeriodo)
	{
		//muestra el saldo de un proyecto dependiendo del periodo
		$data = DB::select('SELECT  proyectos.name, recursos.monto, recursos.periodo_id, proyectos.id, recursos.proyecto_id  FROM proyectos INNER JOIN recursos ON proyectos.id = recursos.proyecto_id WHERE proyectos.id = '.$idProyecto.' AND recursos.periodo_id = '.$idPeriodo);
		if (!$data) {
			return response()->json(['No se encontro saldo asignado del Solin',404],404);
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
		//
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
