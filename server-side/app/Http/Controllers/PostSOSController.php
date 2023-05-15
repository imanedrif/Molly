<?php

namespace App\Http\Controllers;

use App\Models\PostSOS;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostSOSController extends Controller
{
    public function index()
    {
        $postSOS = PostSOS::with('user')->withCount('comments', 'likes')->orderByDesc('created_at')->get();
        return response()->json([
            'data' => $postSOS
        ], 200);
    }
    public function create(Request $request)
    {
        $user = Auth::user();
        $postSOS = new PostSOS([
            'text' => $request->input('text')
        ]);
        $postSOS->user()->associate($user);
        $postSOS->save();
        return response()->json([
            'data' => $postSOS
        ], 200);
    }

    public function show(PostSOS $postSOS)
    {
        $postSOS->load('user', 'comments', 'likes');
        return response()->json([
            'data' => $postSOS
        ], 200);
    }

}
