<?php

namespace Modules\Location\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Location\Database\factories\DepartmentFactory;

class Department extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ["name", "department_code"];
}
