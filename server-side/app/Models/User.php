<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phoneNumber',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function postSOS(): HasMany
    {
        return $this->HasMany(PostSOS::class);
    }
    public function pets(): HasMany
    {
        return $this->HasMany(Pet::class);
    }
    public function likes(): HasMany
    {
        return $this->HasMany(Like::class);
    }
    public function comments(): HasMany
    {
        return $this->HasMany(Comment::class);
    }
    public function wishlist(): HasMany
{
    return $this->hasMany(Wishlist::class);
}

}
