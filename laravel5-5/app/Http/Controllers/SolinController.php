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
		
		
		$data = DB::select('SELECT solins.id, departamentos.name, solins.folio, solins.proyecto_id, proyectos.name AS proyectoNombre, solins.usuario_cr_id, U1.name AS creador, U1.cargo AS cargoCr, solins.usuario_c_id, U2.name AS confirmador, U2.cargo AS cargoC, solins.usuario_a_id, U3.name AS autorizador, U3.cargo AS cargoA, solins.periodo_id, solins.monto, solins.montoL, solins.descripcion, solins.pago, solins.n_pago, solins.status, recursos.periodo_id, periodos.name FROM solins  INNER JOIN proyectos ON proyectos.id = solins.proyecto_id INNER JOIN deptos__proyectos ON deptos__proyectos.proyecto_id = proyectos.id INNER JOIN departamentos ON departamentos.id = deptos__proyectos.departamento_id INNER JOIN recursos ON recursos.proyecto_id = proyectos.id INNER JOIN periodos ON recursos.periodo_id = periodos.id INNER JOIN users U1 ON U1.id = solins.usuario_cr_id INNER JOIN users U2 ON U2.id = solins.usuario_c_id INNER JOIN users U3 ON U3.id = solins.usuario_a_id WHERE departamentos.id = '.$idDepartamento.' AND periodos.id = '.$periodo.' AND solins.status = '.$estado);
		if(!$data){
			return response()->json(['No hay Solines',404],404);
		}
		return response()->json([$data],200);

	}

	public function ContSolinPeriodo($departamento,$periodo)
	{
		$data = DB::select('SELECT count(*) FROM solins INNER JOIN proyectos ON proyectos.id = solins.proyecto_id INNER JOIN deptos__proyectos ON deptos__proyectos.proyecto_id = proyectos.id INNER JOIN departamentos ON departamentos.id = deptos__proyectos.departamento_id  WHERE departamentos.id = ' . $departamento . ' AND solins.periodo_id = ' . $periodo);
		if (!$data) {
			return response()->json(['No se encontraron solines',404],404);
		}
		return response()->json([$data],200);
	}

	public function solinEstado($periodo,$estado)
	{
		$data = DB::select('SELECT solins.id, departamentos.name, solins.folio, solins.proyecto_id, proyectos.name AS proyectoNombre, solins.usuario_cr_id, U1.name AS creador, U1.cargo AS cargoCr, solins.usuario_c_id, U2.name AS confirmador, U2.cargo AS cargoC, solins.usuario_a_id, U3.name AS autorizador, U3.cargo AS cargoA, solins.periodo_id, solins.monto, solins.montoL, solins.descripcion, solins.pago, solins.n_pago, solins.status, recursos.periodo_id, periodos.name FROM solins  INNER JOIN proyectos ON proyectos.id = solins.proyecto_id INNER JOIN deptos__proyectos ON deptos__proyectos.proyecto_id = proyectos.id INNER JOIN departamentos ON departamentos.id = deptos__proyectos.departamento_id INNER JOIN recursos ON recursos.proyecto_id = proyectos.id INNER JOIN periodos ON recursos.periodo_id = periodos.id INNER JOIN users U1 ON U1.id = solins.usuario_cr_id INNER JOIN users U2 ON U2.id = solins.usuario_c_id INNER JOIN users U3 ON U3.id = solins.usuario_a_id WHERE periodos.id = '.$periodo.' AND solins.status = '.$estado);
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
	public function update(Request $request, $id)
	{
		//actualizar un solin de un usuario
		$metodo =$request->method();
		$data=Solin::find($id);
		if ($metodo==="PATCH") {
			$proyecto_id=$request->get('proyecto_id');
			if ($proyecto_id!=null && $proyecto_id!='') {
				$data->proyecto_id=$proyecto_id;
			}
			$usuario_cr_id=$request->get('usuario_cr_id');
			if ($usuario_cr_id!=null && $usuario_cr_id!='') {
				$data->usuario_cr_id=$usuario_cr_id;
			}
			$usuario_c_id=$request->get('usuario_c_id');
			if ($usuario_c_id!=null && $usuario_c_id!='') {
				$data->usuario_c_id=$usuario_c_id;
			}
			$usuario_a_id=$request->get('usuario_a_id');
			if ($usuario_a_id!=null && $usuario_a_id!='') {
				$data->usuario_a_id=$usuario_a_id;
			}
			$monto=$request->get('monto');
			if ($monto!=null && $monto!='') {
				$data->monto=$monto;
			}
			$montoL=$request->get('montoL');
			if ($montoL!=null && $montoL!='') {
				$data->montoL=$montoL;
			}
			$descripcion=$request->get('descripcion');
			if ($descripcion!=null && $descripcion!='') {
				$data->descripcion=$descripcion;
			}
			$pago=$request->get('pago');
			if ($pago!=null && $pago!='') {
				$data->pago=$pago;
			}
			$n_pago=$request->get('n_pago');
			if ($n_pago!=null && $n_pago!='') {
				$data->n_pago=$n_pago;
			}
			$comprobantes=$request->get('comprobantes');
			if ($comprobantes!=null && $comprobantes!='') {
				$data->comprobantes=$comprobantes;
			}
			$status=$request->get('status');
			if ($status!=null && $status!='') {
				$data->status=$status;
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
		//eliminar solin de un usuario
		$user=Solin::find($id);
		if (!$user) {
			return response()->json(['No se encontro el solin',404],404);
		}
		$user->delete();
		return response()->json(['Solin eliminado exitosamente'],202);
	}

}
