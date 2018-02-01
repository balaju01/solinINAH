<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Departamento extends Model {

	//
	protected $table='departamentos';
	protected $fillable = ['name', 'seudonimo'];

	public function encargado()
	{
		return $this->hasOne('App\User');
	}

	public function Proyecto()
	{
		return $this->belongsToMany('App\Proyecto', 'deptos_proyectos');
	}

}
