<?php

use App\Http\Controllers\FrontEnd\HeroController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Views\ViewsController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;

Route::get('/', [ViewsController::class, 'home'])->name('home');

// Route untuk Views
Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [ViewsController::class, 'dashboard'])->name('dashboard');
    Route::get('project', [ViewsController::class, 'projectManager'])->name('project.manager');
    Route::get('hero', [ViewsController::class, 'hero'])->name('hero');
});

Route::get('projects', function () {
    return response()->json(['projects' => Project::onlyTrashed()->get()]);
});

// Route untuk Actions
Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('project', [ProjectController::class, 'store'])->name('project.store');
    Route::delete('project/{id}', [ProjectController::class, 'destory'])->name('project.destroy');
    Route::put('hero/{id}', [HeroController::class, 'update'])->name('hero.update');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
