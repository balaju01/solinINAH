<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
    	$this->call(DepartamentoSeeder::class);
        $this->call(UsuarioSeeder::class);
        $this->call(PeriodoSeeder::class);
        $this->call(ProyectoSeeder::class);
        $this->call(RecursosSeeder::class);
        $this->call(DeptosProyectosSeeder::class);
    }
}
