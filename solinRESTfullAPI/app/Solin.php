<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Solin extends Model {

	//
	protected $table='solins';
	protected $fillable = ['folio','proyecto_id','usuario_cr_id','usuario_c_id','usuario_a_id','periodo_id','monto','pago','status'];
}
