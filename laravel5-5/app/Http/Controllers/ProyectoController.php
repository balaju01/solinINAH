<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Proyecto;
use App\Deptos_Proyectos;
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

	public function ProyectosDepartamento($idPeriodo,$idDepartamento)
	{
		$data = DB::select('SELECT proyectos.name AS nameProyecto, proyectos.id AS proyecto_id, deptos__proyectos.departamento_id, departamentos.name AS nameDepartamento, proyectos.usuario_id, users.name AS nameUsuario, proyectos.clave AS claveProyecto, proyectos.saldo AS saldoProyecto, recursos.monto AS montoAsignado, recursos.periodo_id, periodos.name AS namePeriodo FROM proyectos INNER JOIN recursos ON proyectos.id = recursos.proyecto_id INNER JOIN periodos ON recursos.periodo_id = periodos.id INNER JOIN users ON proyectos.usuario_id = users.id INNER JOIN deptos__proyectos ON proyectos.id = deptos__proyectos.proyecto_id INNER JOIN departamentos ON deptos__proyectos.departamento_id = departamentos.id WHERE departamentos.id = '.$idDepartamento.' AND periodos.id = '.$idPeriodo);
		if (!$data) {
			return response()->json(['No se encontraron proyectos',404],404);
		}
		return response()->json([$data],200);
	}

	public function ProyectoId($name)
	{
		$data=DB::select('SELECT proyectos.id from proyectos WHERE proyectos.name='.$request->get('name'));
		if(!$data){
			return response()->json(['No hay Proyectos',404],404);
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
		$aux=$request->get('departamento');
		$aux2=Proyecto::create($request->all());
		
		
		DB::insert('INSERT INTO deptos__proyectos (departamento_id , proyecto_id) VALUES  ('.$aux.','.$aux2->id.")");
		return response()->json([$aux2],200);
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
