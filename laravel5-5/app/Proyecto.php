<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model {

	//
	protected $table='proyectos';
	protected $fillable = ['name', 'clave','usuario_id','saldo'];


	public function Solin()
	{
		return $this->hasMany('App\Solin');
	}

	public function Responsable()
	{
		return $this->belongsTo('App\User');
	}

	public function Recurso()
	{
		return $this->hasMany('App\Recurso');
	}

	public function Departamento()
	{
		return $this->belongsToMany('App\Departamento', 'deptos_proyectos');
	}
}
