<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(["middleware" => ["auth:api"]], function(){
    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('refreshToken', [AuthController::class, 'refresh']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::put('update',[UserController::class, 'register']);
    Route::delete('delete',[UserController::class, 'register']);
});

