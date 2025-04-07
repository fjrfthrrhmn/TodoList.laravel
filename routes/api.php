<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/project')->controller(ProjectController::class)->group(function () {
    Route::get('list', 'indexApi')->name('project.indexApi');
    Route::get('trash', 'trashApi')->name('project.trashApi');
    Route::get('detail/{id}', 'showApi')->name('project.showApi');
    Route::post('store', 'storeApi')->name('project.storeApi');
    Route::delete('delete/{id}', 'destroyApi')->name('project.destroyApi');
    Route::put('update/{id}', 'updateApi')->name('project.updateApi');
});

Route::prefix('/task')->controller(TaskController::class)->group(function () {
    Route::get('list', 'indexApi')->name('task.indexApi');
    Route::get('detail/{id}', 'showApi')->name('task.showApi');
    Route::post('store/{id}', 'storeApi')->name('task.storeApi');
    Route::delete('delete/{id}', 'destroyApi')->name('task.destroyApi');
    Route::put('update/{id}', 'updateApi')->name('task.updateApi');
    Route::put('change-status/{id}', 'changeStatusApi')->name('task.changeStatusApi');
});
