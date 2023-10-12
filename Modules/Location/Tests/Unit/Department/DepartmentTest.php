<?php

namespace Modules\Location\Tests\Unit\Department;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Modules\Location\Entities\Department;

class DepartmentTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic create unit test for Department module.
     *
     * @return void
     */
    public function test_store_department(): void
    {
        $department = new Department();
        $department->name = "Test Department 0001";
        $department->department_code = "TD0001";
        $department->save();

        $this->assertTrue(true);
    }
}
