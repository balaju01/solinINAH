<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSolinsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('solins', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('folio');
			$table->integer('proyecto_id')->unsigned();
			$table->integer('usuario_cr_id')->unsigned();
			$table->integer('usuario_c_id')->unsigned()->nullable();
			$table->integer('usuario_a_id')->unsigned()->nullable();
			$table->integer('periodo_id')->unsigned();
			$table->float('monto');
			$table->text('descripcion');
			$table->string('pago');
			$table->string('n_pago');
			$table->integer('status');
			$table->foreign('proyecto_id')->references('id')->on('proyectos');
			$table->foreign('usuario_cr_id')->references('id')->on('users');
			$table->foreign('usuario_c_id')->references('id')->on('users');
			$table->foreign('usuario_a_id')->references('id')->on('users');
			$table->foreign('periodo_id')->references('id')->on('periodos');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('solins');
	}

}
