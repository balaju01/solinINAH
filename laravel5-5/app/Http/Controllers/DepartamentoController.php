<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Departamento;
use Illuminate\Http\Request;

class DepartamentoController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
		$data=Departamento::all();
		if(!$data){
			return response()->json(['No hay departamentos',404],404);
		}
		return response()->json([$data],200);
	}

	public function showName($name)
	{
		return "aqui se muestan los Departamentos por Nombre = $name";
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
		return "aqui se crean los Departamentos";
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		//
		Departamento::create($request->all());
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
		//

		$data=Departamento::find($id);
		
		if (!$data) {
			return response()->json(['No se encontro el departamento',404],404);
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
		return "aqui se edita el Departamento por id = $id";
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
		return "aqui se actualiza el Departamento por id = $id";
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
		return "aqui se elimin el Departamento por id = $id";
	}

}
