<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $user = Auth::user();

        $comment = new Comment([
            'content' => $request->input('content')
        ]);

        $comment->user()->associate($user);
        $comment->postSos()->associate($request->input('post_id'));
        $comment->save();

        return response()->json([
            'data' => $comment
        ], 200);
    }

    public function update(Request $request, Comment $comment)
    {
        $comment->update([
            'content' => $request->input('content')
        ]);
        return response()->json([
            'data' => $comment
        ], 200);
    }
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json([
            'message' => 'comment deleted successfully'
        ], 200);
    }
}
