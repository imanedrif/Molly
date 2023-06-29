<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
// impoer response class
// import file class
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response as FacadeResponse;
use Illuminate\Support\Facades\File;

class PetController extends Controller
{
    public function index()
    {
        $pets = Pet::all();

        $petsWithImages = $pets->map(function ($pet) {
            $pet->image = asset('api/image/' . $pet->image);
            return $pet;
        });

        return response()->json(['data' => $petsWithImages], 200);
    }
    public function userPets()
    {
        $user = Auth::user();
        $pets = $user->pets;

        $petsWithImages = $pets->map(function ($pet) {
            $pet->image = asset('api/image/' . $pet->image);
            return $pet;
        });

        return response()->json(['data' => $petsWithImages], 200);
    }

    public function getImage($filename)
    {
        $path = public_path('storage/images/' . $filename);

        if (!file_exists($path)) {
            abort(404);
        }
        $fileContents = File::get($path);
        $response = FacadeResponse::make($fileContents, 200);
        $response->header('Content-Type', 'image/png');
        return $response;
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $inputs = $request->all();
        $validation = Validator::make($inputs, [
            'title',
            'name' => 'required',
            'category' => 'required',
            'city' => 'required',
            'age' => 'required',
            'gender' => 'required',
            'description',
            'image' => 'required|image|mimes:jpeg,jpg,png,svg'
        ]);

        if ($validation->fails()) {
            return response()->json(['Validation Failed ' => $validation], 401);
        }
        $pet = new Pet($request->except('image'));
        $pet->user()->associate($user);

        $image = $request->file('image');
        $imageName = Str::random(20) . "." . $image->getClientOriginalExtension();
        $path = $image->storeAs('images/' . $imageName);
        $pet->image = $imageName;

        // Save the image path to the database or do any additional processing if needed
        $pet->save();

        return response()->json([
            'message' => 'Pet created successufully '
        ], 200);
    }

    public function show($id)
    {
        $pet = Pet::find($id);
        if (!$pet) {
            return response()->json([
                'message' => 'Pet not found'
            ], 404);
        }
        // $pet->image = asset('api/image/'.$pet->image);
        $pet->user = $pet->user;
        return response()->json([
            $pet,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $pet = Pet::find($id);

        if ($pet->user_id !== $user->id) {
            return response()->json([
                'error' => 'you are not allowed to update this pet'
            ], 403);
        }

        $pet->update($request->all());
        // return response()->json($request->all(), 200);
        return response()->json([
            'message' => 'Pet updated successfully.',
            'data' => $pet,
        ], 200);
    }
    public function destroy($id)
    {
        $user = Auth::user();
        $pet = Pet::find($id);

        if ($pet->user_id != $user->id) {
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
