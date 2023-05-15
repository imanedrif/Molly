<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function like(Request $request)
    {
        $user = Auth::user();
        $postId = $request->input('post_id');
        
        $like = Like::where('user_id', $user->id)
            ->where('post_id', $postId)
            ->first();

        if ($like) {
            // User has already liked the post, so unlike it
            $like->delete();

            return response()->json([
                'message' => 'Post unliked successfully',
            ], 200);
        } else {
            // User has not liked the post yet, so create a new like
            $newLike = new Like([
                'user_id' => $user->id,
                'post_id' => $postId,
            ]);
            $newLike->save();

            return response()->json([
                'message' => 'Post liked successfully',
                'data' => $newLike,
            ], 200);
        }
    }
}
