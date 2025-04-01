<?php

use App\Http\Controllers\FrontEnd\HeroController;
use App\Http\Controllers\Views\ViewsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ViewsController::class, 'home'])->name('home');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [ViewsController::class, 'dashboard'])->name('dashboard');
    Route::get('hero', [ViewsController::class, 'hero'])->name('hero');
});

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::put('hero/{id}', [HeroController::class, 'update'])->name('hero.update');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
