<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class UserSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		

		// $this->call('UserTableSeeder');
		User::create
		([
			'name'->'Admin',
			'departamento_id'->1,
			'email'->'admin',
			'password'->Hash::make('admin')
		]);
		
	}

}
