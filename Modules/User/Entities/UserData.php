<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserData extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'user_type_id',
        'country_id',
        'first_name',
        'middle_name',
        'last_name',
        'telephone_number',
        'mobile_number',
        'postal_code',
        'address',
        'date_of_birth',
        'email'
    ];
}
