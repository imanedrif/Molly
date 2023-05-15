<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $wishlist = $user->wishlist;

        return response()->json([
            'data' => $wishlist
        ], 200);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $wishlist = new Wishlist;
        $wishlist->user_id = $user->id;
        $wishlist->pet_id = $request->input('pet_id');
        $wishlist->save();

        return response()->json([
            'data' => $wishlist
        ], 200);
    }

    public function destroy($id){
        $wishlist = Wishlist::findOrFail($id);
        if($wishlist->user_id === Auth::id()){
            $wishlist->delete();
            return response()->json([
                'message'=>'pet removed from wishlist'
            ], 200);
        }
        else{
            return response()->json([
                'error'=>'Unauthorized'
            ], 401);
        }
    }
}
