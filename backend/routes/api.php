<?php

use App\Http\Controllers\api\admin\AdminCategoryController;
use App\Http\Controllers\api\admin\AdminEventController;
use App\Http\Controllers\api\admin\AdminGuideController;
use App\Http\Controllers\api\auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('jwt.auth')->group(function () {
    Route::middleware('admins')->group(function () {
        Route::controller(AdminCategoryController::class)->group(function () {
            Route::get('get-categories',  'get_categories');
            Route::post('create-categories',  'create_category');
            Route::post('update-categories',  'update_category');
            Route::delete('delete-categories',  'delete_category');
        });
        Route::controller(AdminEventController::class)->group(function () {
            Route::get('get-events',  'get_events');
            Route::post('create-events',  'create_event');
            Route::delete('delete-events',  'delete_event');
        });
        Route::controller(AdminGuideController::class)->group(function () {
            Route::get('get-guides',  'get_guides');
            Route::post('create-guides',  'create_guide');
            Route::delete('delete-guides',  'delete_guide');
        });
    });
});
