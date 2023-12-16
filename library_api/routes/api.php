<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*===========================
=           authors           =
=============================*/

Route::apiResource('/authors', \App\Http\Controllers\API\AuthorsController::class);

/*=====  End of authors   ======*/

/*===========================
=           genres           =
=============================*/

Route::apiResource('/genres', \App\Http\Controllers\API\GenreController::class);

/*=====  End of genres   ======*/
