<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Like extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','post_id'];
    /**
     * Get the user that owns the Like
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function postSos()
    {
        return $this->belongsTo(PostSOS::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
