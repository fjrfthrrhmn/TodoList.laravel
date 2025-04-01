<?php

namespace App\Models\FrontEnd;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    //
    protected $fillable = ['title', 'subtitle', 'description', 'image_url'];
    protected $hidden = ['image_url'];
    protected $table = 'hero_section';
}
