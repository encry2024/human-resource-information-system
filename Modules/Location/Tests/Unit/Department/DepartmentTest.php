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
     * @return boolean
     */
    public function test_create_department(): bool
    {
        $department = new Department();
        $department->name = "Test Department 0001";
        $department->department_code = "TD0001";

        if (!$department->save()) {
            return false;
        }

        $this->assertTrue(true);
    }
}
