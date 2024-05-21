<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('/products',ProductController::class);

Route::controller(AuthController::class)->group(function (){
    Route::post('/register','register');
    Route::post('/login','login');
    Route::get('/userProfile','userProfile')->middleware('auth:sanctum');
    Route::post('/logout','logout')->middleware('auth:sanctum');
    Route::post('/allUser','allUser');
    
});