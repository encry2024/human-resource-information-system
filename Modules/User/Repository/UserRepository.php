<?php

namespace Modules\User\Repository;

use Illuminate\Http\JsonResponse;
use Modules\BaseRepository;
use Modules\User\Entities\User;
use Illuminate\Support\Facades\DB;
use Modules\User\Entities\UserData;

class UserRepository extends BaseRepository
{
    /**
     * @inheritDoc
     */
    public function model()
    {
        return User::class;
    }

    public function store(array $data): UserData|JsonResponse
    {
        return DB::transaction(function() use($data) {
            if ($user = $this->create([
                'username' => $data['username'],
                'password' => bcrypt($data['password']),
                'email' => $data['email']
            ])) {
                $userDataRepository = new UserDataRepository();

                return $userDataRepository->store($data, $user);
            }

            return response()->json([
                'message' => 'Something went wrong while saving the user.',
                'icon' => 'error',
                'title' => 'Save Failed'
            ]);
        });
    }

    public function destroy(User $user): bool
    {
        return DB::transaction(function() use($user) {
            if ($user instanceof User) {
                $userDataRepository = new UserDataRepository();

                if ($userDataRepository->destroy($user) && $this->deleteById($user->id)) {
                    return true;
                }

                return response()->json([
                    'message' => 'Something went wrong while deleting the user',
                    'icon' => 'error',
                    'title' => 'Delete Failed'
                ]);
            }

            return response()->json([
                'message' => 'Looks like there was an error in the user\'s data',
                'icon' => 'error',
                'title' => 'Delete Failed'
            ]);
        });
    }
}
