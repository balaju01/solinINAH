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
        		'rol' => 1
        	]
        ];

        foreach ($users as $user) {
        	User::create($user);
        }
    }
}
