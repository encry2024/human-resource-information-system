<?php

namespace Modules\User\Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Modules\User\Entities\User;
use Modules\User\Entities\UserData;
use Modules\User\Entities\UserType;

class UserDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userType = UserType::create([
            'name' => 'Administrator'
        ]);

        $user = User::create([
            'username' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('password'),
        ]);

        UserData::create([
            'user_type_id' => $userType->id,
            'user_id' => $user->id,
            'country_id' => 1,
            'first_name' => 'Christan Jake',
            'middle_name' => 'Calda',
            'last_name' => 'Gatchalian',
            'postal_code' => 1400,
            'address' => '#8 Roxas St. Happy Glen Loop Subd., Deparo, Brgy. 168, Caloocan City',
            'telephone_number' => '(02)882756865',
            'mobile_number' => '+639667036547',
            'email' => 'christan.gatchalian0820@gmail.com',
            'date_of_birth' => Carbon::create('1992', '08', '20')
        ]);
    }
}
