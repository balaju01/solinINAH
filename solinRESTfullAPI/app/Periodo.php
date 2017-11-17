<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Periodo extends Model {

	//
	protected $table='periodos';
	protected $fillable = ['presupuesto','inicio','fin'];

	public function Solin()
	{
		return $this->hasMany('App\Solin');
	}

	public function Recurso()
	{
		return $this->hasMany('App\Recurso');
	}

}
