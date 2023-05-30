<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CommentReplyController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\PostSOSController;
use App\Http\Controllers\WishlistController;
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

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('register', [AuthController::class, 'Register']);
Route::post('login', [AuthController::class, 'Login']);
Route::post('logout', [AuthController::class, 'Logout']);

// pet routes
Route::post('pets',[PetController::class,'store'])->middleware('auth:sanctum');
Route::get('pets',[PetController::class,'index']);
Route::get('pets/{id}',[PetController::class,'show']);
Route::patch('pets/{id}',[PetController::class,'update'])->middleware('auth:sanctum');
Route::delete('pets/{id}',[PetController::class,'destroy'])->middleware('auth:sanctum');

// wishlist routes
Route::get('wishlists',[WishlistController::class,'index'])->middleware('auth:sanctum');
Route::post('wishlists',[WishlistController::class,'store'])->middleware('auth:sanctum');
Route::delete('wishlists/{id}',[WishlistController::class,'destroy'])->middleware('auth:sanctum');

// postSOS routes
Route::get('SOS',[PostSOSController::class,'index'])->middleware('auth:sanctum');
Route::post('SOS/add',[PostSOSController::class,'create'])->middleware('auth:sanctum');
Route::get('SOS/{postSOS}',[PostSOSController::class,'show'])->middleware('auth:sanctum');

// comment routes
Route::post('comments',[CommentController::class,'store'])->middleware('auth:sanctum');
Route::patch('comments/{comment}',[CommentController::class,'update']);
Route::delete('comments/{comment}',[CommentController::class,'destroy']);

// likes routes
Route::post('like',[LikeController::class,'like'])->middleware('auth:sanctum');

// reply routes
Route::post('/replies',[CommentReplyController::class,'create'])->middleware('auth:sanctum');
Route::get('replies/{reply}',[CommentReplyController::class,'show'])->middleware('auth:sanctum');
