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
        return Inertia::render('dashboards/ProjectManagerPage', [
            'projects' => Project::where('user_id', Auth::id())->orderByDesc('id')->get(),
        ]);
    }

    function projectDetail(string $id)
    {
        $project = Project::with([
            'tasks' => function ($items) { $items->orderByDesc('id'); }
        ])->findOrFail($id);

        return Inertia::render('dashboards/ProjectDetailPage', [
            'project' => $project,
        ]);
    }

    function hero()
    {
        return Inertia::render('dashboards/Hero');
    }

    function home()
    {
        return Inertia::render('welcome');
    }
}
