<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class PetController extends Controller
{
    Public function index(){
        $pets = Pet::all();
        return response()->json(['data'=>$pets], 200);
    }

    public function store(Request $request){
        $user = Auth::user();
        $inputs = $request->all();
        $validation = Validator::make($inputs,[
            'title',
            'name'=>'required',
            'category'=>'required',
            'city'=>'required',
            'age'=>'required',
            'gender'=>'required',
            'description',
            'image'=>'required|image|mimes:jpeg,jpg,png,svg'
        ]);

        if($validation->fails()){
            return response()->json(['errors'=>$validation], 401);
        }

        $pet = new Pet($request->except('image'));
        $pet->user()->associate($user);

        $image = $request->file('image');
        $imageName = Str::random(20).".".$image->getClientOriginalExtension();
        $pet->image = $imageName;
        $pet->save();

        Storage::disk('public')->put($imageName,file_get_contents($image));

        return response()->json([
            'message'=>'Pet created successufully '
        ], 200);
    }

    Public function show($id){
        $pet = Pet::with('users')->find($id);

        if(!$pet){
            return response()->json(['error'=>'pet not found'], 401);
        }
        return response()->json([
            'data' => $pet
        ], 200);
    }
    public function update(Request $request,$id){
        $user = Auth::user();
        $pet = Pet::find($id);

        if($pet->user_id !== $user->id){
            return response()->json([
                'error'=>'you are not allowed to update this pet'
            ], 403);
        }

        $validation = $request->validate([
            'title',
            'name'=>'required',
            'category'=>'required',
            'city'=>'required',
            'age'=>'required',
            'gender'=>'required',
            'description',
            'image'=>'sometimes|image|mimes:jpeg,jpg,png,svg',
            'statuts'
        ]);

        if($request->hasFile('image')){
            $image = $request->file('image');
            $imageName = Str::random(20).".".$image->getClientOriginalExtension();
            $pet->image = $imageName;
            Storage::disk('public')->put($imageName,file_get_contents($image));
        }

        $pet->name = $validation['name'];
        $pet->gendre = $validation['gendre'];
        $pet->category = $validation['category'];
        $pet->age = $validation['age'];
        $pet->city = $validation['city'];
        $pet->description = $validation['description'];
        $pet->title = $validation['title'];
        $pet->statuts = $validation['statuts'];
        $pet->save();

        return response()->json([
            'message' => 'Pet updated successfully.'
        ],200);

    }
    public function destroy($id)
    {
        $user = Auth::user();
        $pet = Pet::find($id);

        if (!$pet) {
            return response()->json([
                'message' => 'Pet not found.'
            ], 404);
        }

        if ($pet->user_id !== $user->id) {
            return response()->json([
                'message' => 'You are not authorized to delete this pet.'
            ], 403);
        }

        $pet->delete();

        return response()->json([
            'message' => 'Pet deleted successfully.'
        ]);
    }
}
