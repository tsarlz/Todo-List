<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController
{
    public function register(RegisterRequest $request) {
        $validatedData = $request->validated();

        $user = User::create([
            'first_name'=>$validatedData['first_name'],
            'last_name'=>$validatedData['last_name'],
            'email'=>$validatedData['email'],
            'password'=>Hash::make($validatedData['password']),
        ]);

        $token = $user->createToken('auth_token');

        return response()->json([
            'user'=>$user,
            'token'=>$token->plainTextToken
        ]);
    }

    public function login(LoginRequest $request){
        $credentials = $request->validated();

        $user = User::where('email',$credentials['email'])->first();

        if(!$user || !Hash::check($credentials['password'],$user->password)) {
            return response()->json([
                'message'=> 'Invalid email or password'
            ],401);
        }

        $token = $user->createToken('auth_token');

        return response()->json([
            'user'=>$user,
            'token'=>$token->plainTextToken
        ]);
    }
}
