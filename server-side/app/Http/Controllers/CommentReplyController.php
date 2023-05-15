<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\CommentReply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentReplyController extends Controller
{
    public function create(Request $request)
    {
        $user = Auth::user();
        $commentId = $request->input('comment_id');

        $comment = Comment::findOrFail($commentId);

        $reply = new CommentReply([
            'user_id' => $user->id,
            'content' => $request->input('content'),
        ]);

        $comment->replies()->save($reply);

        return response()->json([
            'message' => 'Comment reply created successfully',
            'data' => $reply,
        ], 200);
    }

    public function show(CommentReply $reply)
    {
        return response()->json([
            'data' => $reply,
        ], 200);
    }
}
