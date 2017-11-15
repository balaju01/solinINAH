<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecursosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('recursos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->float('monto');
			$table->integer('proyecto_id')->unsigned();
			$table->integer('usuario_id')->unsigned();
			$table->integer('periodo_id')->unsigned();
			$table->foreign('proyecto_id')->references('id')->on('proyectos');
			$table->foreign('usuario_id')->references('id')->on('users');
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
		Schema::drop('recursos');
	}

}
