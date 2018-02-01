<?php

use Illuminate\Database\Seeder;
use App\Deptos_Proyectos;

class DeptosProyectosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $pds = [
        	[
        		'departamento_id' => '2',
        		'proyecto_id' => '1'
        	],
        	[
        		'departamento_id' => '3',
        		'proyecto_id' => '1'
        	]
        ];

        foreach ($pds as $ds) {
        	Deptos_Proyectos::create($ds);
        }
    }
}
