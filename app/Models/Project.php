<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;
    
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

    protected $appends = ['formated_deadline'];

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


    function getFormatedDeadlineAttribute()
    {
        return $this->deadline ? Carbon::parse($this->deadline)->translatedFormat('l, j F Y') : null;
    }
}
