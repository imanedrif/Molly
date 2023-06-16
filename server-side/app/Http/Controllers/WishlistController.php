<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use App\Models\Pet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $wishlist = $user->wishlist;

        if ($wishlist) {
            $petIds = $wishlist->pluck('pet_id')->toArray();
            $pets = Pet::whereIn('id', $petIds)->get();
            $petsWithImages = $pets->map(function ($pet) {
                $pet->image = asset('api/image/' . $pet->image);
                return $pet;
            });
        } else {
            $pets = [];
        }

        return response()->json([
            'data' => $pets
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

    public function destroy($id)
    {
        // $wishlist = Wishlist::findOrFail($id);
        $wishlist = Wishlist::where('pet_id', $id)->first();
        if ($wishlist->user_id === Auth::id()) {
            $wishlist->delete();
            return response()->json([
                'message' => 'pet removed from wishlist'
            ], 200);
        } else {
            return response()->json([
                'error' => 'Unauthorized'
            ], 401);
        }
    }
    public function show($id)
    {
        $user = Auth::user();
        // get the wishlist that belongs to the user and has the pet_id
        $wishlist = Wishlist::where('user_id', $user->id)->where('pet_id', $id)->first();
        if ($wishlist) {
            return response()->json($wishlist, 200);
        } else {
            return response()->json([
                'error' => 'Unauthorized'
            ], 401);
        }
    }
}
