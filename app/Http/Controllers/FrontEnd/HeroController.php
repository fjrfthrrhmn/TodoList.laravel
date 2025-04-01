<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Models\FrontEnd\Hero;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    //
    function update(Request $request, String $id)
    {
        Hero::where('id', $id)->update($request->all());
        return to_route('hero');
    }
}
