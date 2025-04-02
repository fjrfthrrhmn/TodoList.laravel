<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'icon',
        'priority',
        'status',
        'visibility',
        'deadline',
        'user_id'
    ];


    /**
     * Relasi ke tabel users (Setiap proyek dimiliki oleh satu user).
     */
    function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relasi ke tabel tasks (Satu proyek memiliki banyak tugas).
     */
    function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
