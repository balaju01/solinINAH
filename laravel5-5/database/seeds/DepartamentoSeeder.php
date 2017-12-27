<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Departamento;

class DepartamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $departamentos = [
        	[
        		'name' => 'Administracion',
        		'seudonimo' => 'admin',
        	],
        	[
        		'name' => 'Recursos Financieros',
        		'seudonimo' => 'RecFin',
        	],
        	[
        		'name' => 'Subdirección Administrativa',
        		'seudonimo' => 'SubAdm',
        	]
        ];

        foreach ($departamentos as $departamento) {
        	Departamento::create($departamento);
        }
    }
}
