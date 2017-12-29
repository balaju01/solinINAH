<?php

use Illuminate\Database\Seeder;
use App\Periodo;
use Carbon\Carbon;


class PeriodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $date = Carbon::now();
        $users = [
        	[
        		'presupuesto' => 0,
        		'inicio' => 'Enero',
        		'fin' => 'Diciembre',
        		'name' => 'Periodo '.$date->format('Y')
        	]
        ];

        foreach ($users as $user) {
        	Periodo::create($user);
        }
    }
}
