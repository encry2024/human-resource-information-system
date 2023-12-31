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

Route::get('/', function () {
    return redirect(route('login'));
});

Route::get('/login', [LoginController::class, 'login'])->name('login');
Route::post('/login/authenticate', [LoginController::class, 'authenticate']);


Route::middleware(['auth:api'])->group(function() {

    Route::prefix('admin')->group(function() {
        Route::get('/dashboard', [UserController::class, 'index'])->name('user.dashboard');

        Route::get('/users', [UserController::class, 'list'])->name('user.list');

        Route::post('/logout', [UserController::class, 'logout'])->name('user.logout');
    });

});
