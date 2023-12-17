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

Route::group(['namespace'=>'App\Http\Controllers\Api'], function(){
    Route::group(['prefix'=>'auth'], function () {
        Route::post('register', 'AuthenticationController@register');
        Route::post('login', 'AuthenticationController@login');
    });
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:sanctum');
});
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

/*===========================
=           books           =
=============================*/

Route::apiResource('/books', \App\Http\Controllers\API\BookController::class);
Route::get('/books-total', '\App\Http\Controllers\API\BookController@totalBooks');
/*=====  End of books   ======*/

/*===========================
=           bookViews           =
=============================*/

Route::apiResource('/bookViews', \App\Http\Controllers\API\BookViewController::class);

/*=====  End of bookViews   ======*/

/*===========================
=           borrowings           =
=============================*/

Route::apiResource('/borrowings', \App\Http\Controllers\API\BorrowingController::class)->middleware('auth:sanctum');
Route::post('/borrowings/{borrowing}/return','\App\Http\Controllers\API\BorrowingController@returnsBook')->middleware('auth:sanctum');
Route::get('/borrowings-total','\App\Http\Controllers\API\BorrowingController@totalBorrowed')->middleware('auth:sanctum');

/*=====  End of borrowings   ======*/

/*===========================
=           borrowedBooks           =
=============================*/

Route::apiResource('/borrowedBooks', \App\Http\Controllers\API\BorrowedBooksController::class);

/*=====  End of borrowedBooks   ======*/

/*===========================
=           usersDueBooks           =
=============================*/

Route::apiResource('/usersDueBooks', \App\Http\Controllers\API\UsersDueBookController::class);

/*=====  End of usersDueBooks   ======*/
