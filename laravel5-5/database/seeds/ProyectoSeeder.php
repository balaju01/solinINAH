<?php

use Illuminate\Database\Seeder;
use App\Proyecto;

class ProyectoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $proyectos = [
        	[
        		'name' => 'Gasto Basico',
        		'clave' => 'GB-2018',
        		'usuario_id' => '1',
        		'saldo' => '0'
        	]
        ];

        foreach ($proyectos as $proyecto) {
        	Proyecto::create($proyecto);
        }
    }
}
