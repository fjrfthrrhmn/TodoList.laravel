<?php

use App\Http\Controllers\FrontEnd\HeroController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\Views\ViewsController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;

Route::get('/', [ViewsController::class, 'home'])->name('home');

// Route untuk Views
Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [ViewsController::class, 'dashboard'])->name('dashboard');
    Route::get('projects', [ViewsController::class, 'projectManager'])->name('project.manager');
    Route::get('project/{id}', [ViewsController::class, 'projectDetail'])->name('project.detail');
    Route::get('hero', [ViewsController::class, 'hero'])->name('hero');
});

// Route untuk Actions
Route::middleware(['auth', 'verified'])->group(function () {
    // Action Project
    Route::post('project', [ProjectController::class, 'store'])->name('project.store');
    Route::put('project/{id}', [ProjectController::class, 'update'])->name('project.update');
    Route::delete('project/{id}', [ProjectController::class, 'destory'])->name('project.destroy');
    
    // Action Task
    Route::post('task/{id}', [TaskController::class, 'store'])->name('task.store');
    Route::put('task/{id}', [TaskController::class, 'changeStatus'])->name('task.changeStatus');
    Route::delete('task/{id}', [TaskController::class, 'destroy'])->name('task.destroy');
    
    // Action Frontend
    Route::put('hero/{id}', [HeroController::class, 'update'])->name('hero.update');
});

Route::get('project/{id}', function (String $id) {
    return response()->json([
        'project' => Project::with('tasks')->findOrFail($id)
    ]);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
