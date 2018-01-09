<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Solin extends Model {

	//
	protected $table='solins';
	protected $fillable = ['folio','proyecto_id','usuario_cr_id','usuario_c_id','usuario_a_id','periodo_id','monto','montoL','descripcion','pago','n_pago','status'];

	public function Proyecto()
	{
		return $this->belongsTo('App\Proyecto');
	}

	public function Periodo()
	{
		return $this->belongsTo('App\Periodo');
	}

	public function Creador()
	{
		return $this->belongsTo('App\User','usuario_cr_id');
	}

	public function Autori()
	{
		return $this->belongsTo('App\User','usuario_a_id');
	}

	public function Comprueba()
	{
		return $this->belongsTo('App\User','usuario_c_id');
	}
}
