<?php

use Illuminate\Database\Seeder;
use App\Recurso

class RecursosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $recursos = [
        	[
        		'monto' => '0',
        		'proyecto_id' => '1',
        		'usuario_id' => '1',
        		'periodo_id' => '1'
        	]
        ];

        foreach ($recursos as $recurso) {
        	Departamento::create($recurso);
        }
    }
}
