<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Deptos_Proyectos extends Model {

	//
	protected $table='deptos_proyectos';
	protected $fillable = ['departamento_id','proyecto_id'];
}
