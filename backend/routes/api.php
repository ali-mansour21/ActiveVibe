<?php

use App\Http\Controllers\api\admin\AdminCategoryController;
use App\Http\Controllers\api\auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('jwt.auth')->group(function () {
    Route::middleware('admins')->group(function (){
        Route::post('get-categories',[AdminCategoryController::class,'get_categories']);
    });
});
