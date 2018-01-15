<?php namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract {

	use Authenticatable, CanResetPassword;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'email', 'password', 'rol', 'cargo', 'departamento_id'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password','fecha_de_creacion'];

	public function Departamento()
	{
		return $this->belongsTo('App\Departamento');
	}

	public function SolinCreador()
	{
		return $this->hasMany('App\Solin','usuario_cr_id');
	}

	public function SolinAutori()
	{
		return $this->hasMany('App\Solin','usuario_a_id');
	}

	public function SolinComprueba()
	{
		return $this->hasMany('App\Solin','usuario_c_id');
	}

	public function Proyecto()
	{
		return $this->hasMany('App\Proyecto');
	}

	public function Recurso()
	{
		return $this->hasMany('App\Recurso');
	}

}
