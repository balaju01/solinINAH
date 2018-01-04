<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Recurso;
use Illuminate\Http\Request;

class RecursoController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
		return response()->json(['Recurso editado exitosamente'],202);
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
		if (!$request->get('monto')) {
			return response()->json(['faltan datos',422],422);
		}
		
		Recurso::create($request->all());
		return response()->json(['se ha creado el proyecto'],200);
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
	public function update(Request $request, $id)
	{
		//
		$metodo =$request->method();
		$data=Recurso::find($id);
		if ($metodo==="PATCH") {
			$periodo_id=$request->get('periodo_id');
			if ($periodo_id!=null && $periodo_id!='') {
				$data->periodo_id=$periodo_id;
			}
			$usuario_id=$request->get('usuario_id');
			if ($usuario_id!=null && $usuario_id!='') {
				$data->usuario_id=$usuario_id;
			}
			$proyecto_id=$request->get('proyecto_id');
			if ($proyecto_id!=null && $proyecto_id!='') {
				$data->proyecto_id=$proyecto_id;
			}
			$monto=$request->get('monto');
			if ($monto!=null && $monto!='') {
				$data->monto=$monto;
			}
			$data->save();
			return response()->json(['Recurso editado exitosamente'],202);
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
