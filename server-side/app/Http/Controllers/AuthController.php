<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    Public function Register(Request $request){

        $input = $request->all();

        $validation = Validator::make($input,[
            'name'=>'required',
            'email'=>'required|email',
            'phoneNumber'=>'required|min:10|max:10',
            'password'=>'required|min:8',
        ]);

        if ($validation->fails()){
            return response()->json(['error' => $validation->errors()], 401);
        }

        $exist = User::where('email',$input['email'])->first();
        if($exist){
            return response()->json(['error'=>'Email already exist'], 401);
        }

        $user = new User();
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->password = $input['password'];
        $user->phoneNumber = $input['phoneNumber'];
        $user->save();

        $token = $user->createToken('auth_token',['user'])->plainTextToken;
        return response()->json(['user'=>$user ,'Auth_token'=>$token], 200);
    }

    Public function Login(Request $request){

        $input = $request->all();
        $validation = Validator::make($input,[
            'email'=>'required|email',
            'password'=>'required|min:8',
        ]);

        if($validation->fails()){
            return response()->json(['error'=>$validation], 401);
        }
        $user = User::where('email', $input['email'])->first();
        $token = $user->createToken('auth_token',['user'])->plainTextToken;
        return response()->json(['user'=>$user , 'Auth_token'=>$token], 200);
    }

    Public function Logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message'=>'logout succesfully'], 200);
    }
}
