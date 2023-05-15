<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'gender',
        'image',
        'category',
        'age',
        'description',
        'title',
        'statuts',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function Likes(): HasMany
    {
        return $this->hasMany(Like::class);
    }

}
