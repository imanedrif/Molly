<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    Public function Register(Request $request){

        $input = $request->all();

        $validation = Validator::make($input,[
            'name'=>'required',
            'email'=>'required|email',
            'phoneNumber'=>'required|numeric',
            'password'=>'required|min:8',
        ]);

        if ($validation->fails()){
            return response()->json(['error' => $validation->errors()], 401);
        }

        $exist = User::where('email',$input['email'])->first();
        if($exist){
            return response()->json(['error'=>'Email already exist'], 409);
        }
        $user = new User();
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->password = bcrypt($input['password']);
        $user->phoneNumber = $input['phoneNumber'];
        $user->save();
        $token = $user->createToken('authToken')->accessToken;
        return response()->json(['user'=>$user ,'Auth_token'=>$token], 200);
    }

    public function Login(Request $request)
    {
        $input = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        if (Auth::attempt($input)) {
            $user = User::where('email', $input['email'])->first();
            $user['token'] = $user->createToken('authToken')->accessToken;;
            return response()->json( $user, 200);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    Public function Logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message'=>'logout succesfully'], 200);
    }
}
