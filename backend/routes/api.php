<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('pictures', 'PictureController@index');
Route::post('comments', 'CommentController@index');
Route::post('addComment', 'CommentController@create');
Route::post('editComment', 'CommentController@update');
Route::post('deleteComment', 'CommentController@destroy');