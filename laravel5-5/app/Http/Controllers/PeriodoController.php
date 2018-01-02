<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Periodo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PeriodoController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//muestra todos los periodos
		$data = Periodo::all();
		if (!$data) {
			return response()->json(['No hay periodos',404],404);
		}
		return response()->json([$data],200);
	}

	public function buscarporNombre($name)
	{
		$data = DB::select('SELECT id, name FROM periodos WHERE name = \''.$name.'\'');
		if (!$data) {
			return response()->json(['No hay periodos',404],404);
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
		//mostrar periodo por id

		$data = Periodo::find($id);
		if (!$data) {
			return response()->json(['No se encontro el periodo',404],404);
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
	public function update(Request $request, $id)
	{
		//
		$metodo =$request->method();
		$data=Periodo::find($id);
		if ($metodo==="PATCH") {
			
			$inicio=$request->get('inicio');
			if ($inicio!=null && $inicio!='') {
				$data->inicio=$inicio;
			}
			$fin=$request->get('fin');
			if ($fin!=null && $fin!='') {
				$data->fin=$fin;
			}
			$presupuesto=$request->get('presupuesto');
			if ($presupuesto!=null && $presupuesto!='') {
				$data->presupuesto=$presupuesto;
			}
			$data->save();
			return response()->json(['Usuario editado exitosamente'],202);
		}
		return response()->json(['Datos invalidos',404],404);
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
