<?php

namespace Modules\Department\Tests\Unit\API;

use Illuminate\Http\JsonResponse;
use Modules\Department\Repository\DepartmentRepository;
use Modules\Location\Entities\Department;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DepartmentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic unit test for store department.
     *
     * @return void
     */
    public function test_store_department(): void
    {
        $arr = [
            'name' => 'Department Test 0001',
            'department_code' => 'DT0001'
        ];

        $departmentRepository = new DepartmentRepository();
        $department = $departmentRepository->store($arr);

        $this->assertInstanceOf(Department::class, $department);
        // Check if the result is not a JSON response on success
        $this->assertNotInstanceOf(JsonResponse::class, $department);
    }

    /**
     * A basic unit test for update department.
     *
     * @return void
     */
    public function test_update_department(): void
    {
        $arr = [
            'name' => 'Department Test 0002',
            'department_code' => 'DT0002'
        ];

        $departmentRepository = new DepartmentRepository();
        $department = $departmentRepository->store($arr);

        $department = $departmentRepository->update($department, $arr);

        // Assert if the returned value is an instance of Department
        $this->assertInstanceOf(Department::class, $department);
        // If the returned value is an instance of Department, check if the value is changed to Department Test 0002
        $this->assertEquals($arr['name'], $department->name);
        // Check if the result is not a JSON response on success
        $this->assertNotInstanceOf(JsonResponse::class, $department);
    }

    /**
     * A basic unit test for destroy department.
     *
     * @return void
     */
    public function test_destroy_department(): void
    {
        $arr = [
            'name' => 'Department Test 0001',
            'department_code' => 'DT0001'
        ];

        $departmentRepository = new DepartmentRepository();
        $department = $departmentRepository->store($arr);

        $department = $departmentRepository->destroy($department);

        $this->assertEquals(true, $department);
    }
}
