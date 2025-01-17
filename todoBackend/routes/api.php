<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);


Route::group(['middleware'=>['auth:sanctum']], function(){
    Route::resource('todos', TodoController::class);
    Route::post('/logout',[AuthController::class,'logout']);
});

