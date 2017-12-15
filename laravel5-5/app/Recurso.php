<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Recurso extends Model {

	//
	protected $table='recursos';
	protected $fillable = ['monto','proyecto_id','usuario_id','periodo_id'];


	public function Asignador()
	{
		return $this->belongsTo('App\User');
	}


	public function Proyecto()
	{
		return $this->belongsTo('App\Proyecto');
	}

	public function Periodo()
	{
		return $this->belongsTo('App\Periodo');
	}
}
