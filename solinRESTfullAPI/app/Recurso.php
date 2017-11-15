<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Recurso extends Model {

	//
	protected $table='recursos';
	protected $fillable = ['monto','proyecto_id','usuario_id','periodo_id'];
}
