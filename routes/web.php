<?php

use App\Http\Controllers\FrontEnd\HeroController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\Views\ViewsController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;

// Route untuk halaman home (landing page)
Route::get('/', [ViewsController::class, 'home'])->name('home');

// * Group route untuk tampilan dashboard, hanya bisa diakses oleh user yang sudah login 
Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {

    // Dashboard utama
    Route::get('/', [ViewsController::class, 'dashboard'])->name('dashboard');
    Route::get('projects', [ViewsController::class, 'projectManager'])->name('project.manager');
    Route::get('project/{id}', [ViewsController::class, 'projectDetail'])->name('project.detail');
});

// * Group route untuk aksi (actions),
Route::middleware(['auth', 'verified'])->group(function () {

    // * === ROUTE ACTION PROJECT ===

    // Menyimpan data project baru ke database
    Route::post('project', [ProjectController::class, 'store'])->name('project.store');

    // Memperbarui data project berdasarkan ID
    Route::put('project/{id}', [ProjectController::class, 'update'])->name('project.update');

    // Menghapus project berdasarkan ID
    Route::delete('project/{id}', [ProjectController::class, 'destory'])->name('project.destroy');


    // * === ROUTE ACTION TASK ===

    // Menambahkan task baru ke dalam project tertentu (berdasarkan ID project)
    Route::post('task/{id}', [TaskController::class, 'store'])->name('task.store');

    // Mengubah status task (misalnya dari pending menjadi done)
    Route::put('task/{id}', [TaskController::class, 'changeStatus'])->name('task.changeStatus');

    // Menghapus task berdasarkan ID
    Route::delete('task/{id}', [TaskController::class, 'destroy'])->name('task.destroy');
});


Route::get('project/{id}', function (string $id) {
    return response()->json([
        'project' => Project::with('tasks')->findOrFail($id)
    ]);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
