<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $users = [
        	[
        		'name' => 'Admin',
        		'departamento_id' => 1,
        		'email' => 'admin',
        		'password' => Hash::make('admin'),
        		'rol' => 1,
        		'cargo' => 'Administrador'
        	],
            [
                'name' => 'Arturo Gómez Martínez',
                'departamento_id' => 2,
                'email' => 'agomez',
                'password' => Hash::make('123456'),
                'rol' => 1,
                'cargo' => 'Jefe de la Subdirección Etnografía'
            ],
            [
                'name' => 'Juan Martínez Martínez',
                'departamento_id' => 3,
                'email' => 'jmartinez',
                'password' => Hash::make('123456'),
                'rol' => 1,
                'cargo' => 'Jefe de Recursos Humanos'
            ]
        ];

        foreach ($users as $user) {
        	User::create($user);
        }
    }
}
