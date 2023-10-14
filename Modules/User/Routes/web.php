<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\LoginController;
use Modules\User\Http\Controllers\UserController;

Route::get('/login', [LoginController::class, 'login']);
Route::post('/login/authenticate', [LoginController::class, 'authenticate']);

Route::middleware(['auth:api'])->group(function() {

    Route::prefix('user')->group(function() {
        Route::get('/dashboard', [UserController::class, 'index'])->name('user.dashboard');
    });

});
