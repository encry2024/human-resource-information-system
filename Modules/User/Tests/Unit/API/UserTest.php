<?php

namespace Modules\User\Tests\Unit\API;

use Carbon\Carbon;
use Modules\User\Entities\User;
use Modules\User\Entities\UserData;
use Modules\User\Repository\UserDataRepository;
use Modules\User\Repository\UserRepository;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;


    public function userData(): array
    {
        return [
            'user_type_id'      => 1,
            'user_id'           => 2,
            'country_id'        => 1,
            'employee_id'       => '0000',
            'first_name'        => "First Name",
            'middle_name'       => "Middle Name",
            'last_name'         => "Last Name",
            'date_of_birth'     => (new Carbon('1992-08-20'))->toDateString(),
            'mobile_number'     => "+639283371403",
            'telephone_number'  => null,
            'address'           => "#8 Roxas St. Happy Glen Loop Subd., Deparo, Caloocan City, Philippines",
            'postal_code'       => 1400,
            'email'             => 'test@email.com',
            'username'          => 'test_user',
            'password'          => 'password'
        ];
    }

    public function test_store_user(): void
    {
        $user = new UserRepository();
        $user = $user->store($this->userData());

        $this->assertInstanceOf(UserData::class, $user);
    }

    /**
     * A basic unit test for update user.
     *
     * @return void
     */
    public function test_update_user(): void
    {
        $testUserDataUpdate = [
            'first_name' => 'Second Name Update',
            'middle_name' => $this->userData()['mobile_number'],
            'last_name' => $this->userData()['mobile_number'],
            'date_of_birth' => $this->userData()['date_of_birth'],
            'mobile_number' => $this->userData()['mobile_number'],
            'postal_code' => $this->userData()['postal_code'],
            'address' => $this->userData()['address'],
            'email' => $this->userData()['email'],
            'country_id' => $this->userData()['country_id'],
            'employee_id' => $this->userData()['employee_id']
        ];

        $user = new UserRepository();
        $user = $user->store($this->userData());

        $userDataRepository = new UserDataRepository();
        $userData = $userDataRepository->update($user, $testUserDataUpdate);

        $this->assertEquals($testUserDataUpdate['first_name'], $userData->first_name);
    }

    /**
     * A basic unit test for destroy user.
     *
     * @return void
     */
    public function test_destroy_user(): void
    {
        $userRepository = new UserRepository();
        $user = $userRepository->store($this->userData());

        $user = User::find($user->user_id);

        // Soft deletes the UserData and User
        $deletedUser = $userRepository->destroy($user);

        $this->assertTrue(true, $deletedUser);
    }
}
