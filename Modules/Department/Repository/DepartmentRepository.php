<?php

namespace Modules\Department\Repository;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Modules\BaseRepository;
use Modules\Location\Entities\Department;

class DepartmentRepository extends BaseRepository
{

    /**
     * @inheritDoc
     */
    public function model()
    {
        return Department::class;
    }

    public function store(array $data): Department|JsonResponse
    {
        return DB::transaction(function() use($data) {
            if ($department = $this->create([
                'name' => $data['name'],
                'department_code' => $data['department_code']
            ])) {
                return $department;
            }

            return response()->json([
                'message' => 'Something went wrong while saving the Department.',
                'icon' => 'error',
                'title' => 'Saving Failed'
            ]);
        });
    }

    public function update(Department $department, array $data): Department|JsonResponse
    {
        return DB::transaction(function() use($department, $data) {
            if ($department = $this->updateById($department->id, [
                'name' => $data['name'],
                'department_code' => $data['department_code']
            ])) {
                return $department;
            }

            return response()->json([
                'message' => 'Something went wrong while updating the Department.',
                'icon' => 'error',
                'title' => 'Update Failed'
            ]);
        });
    }

    public function destroy(Department $department): bool
    {
        return DB::transaction(function() use($department) {
            if ($this->deleteById($department->id)) {
                return true;
            }

            return response()->json([
                'message' => 'Something went wrong while deleting the Department.',
                'icon' => 'error',
                'title' => 'Delete Failed'
            ]);
        });
    }
}
