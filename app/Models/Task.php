<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //
    protected $fillable = [
        'title',
        'description',
        'icon',
        'priority',
        'status',
        'visibility',
        'deadline',
        'project_id'
    ];

    /**
     * Relasi ke tabel projects (Setiap task dimiliki oleh satu project).
     */
    function project()
    {
        return $this->belongsTo(Project::class);
    }
}
