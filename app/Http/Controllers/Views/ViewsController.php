<?php

namespace App\Http\Controllers\Views;

use App\Http\Controllers\Controller;
use App\Models\FrontEnd\Hero;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ViewsController extends Controller
{
    function dashboard()
    {
        return Inertia::render('dashboard');
    }

    function projectManager()
    {
        return Inertia::render('dashboards/ProjectManager', [
            'projects' => Project::where('user_id', Auth::id())->latest()->get()
        ]);
    }
    
    function hero()
    {
        return Inertia::render('dashboards/Hero', [
            'data' => Hero::findOrFail(1)
        ]);
    }
    
    function home()
    {
        return Inertia::render('welcome', [
            'hero' => Hero::findOrFail(1)
        ]);
    }
}
