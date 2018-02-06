<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeptosProyectosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('deptos_proyectos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('departamento_id')->unsigned();
			$table->integer('proyecto_id')->unsigned();
			$table->foreign('departamento_id')->references('id')->on('departamentos');
			$table->foreign('proyecto_id')->references('id')->on('proyectos');
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
		Schema::drop('deptos_proyectos');
	}

}
