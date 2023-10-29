<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use SoftDeletes,
        HasApiTokens;

    protected $fillable = [
        'username',
        'password',
        'email'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password'
    ];

    public function username(): string
    {
        return 'username';
    }

    public function userData(): Collection
    {
        return $this->belongsTo('user_view', 'u_id', 'id');
    }
}
