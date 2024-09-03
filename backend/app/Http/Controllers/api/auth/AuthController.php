<?php

namespace App\Http\Controllers\api\auth;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data =  $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8',
            'date_of_birth' => 'required|date|before:today',
            'gender' => 'required|in:male,female',
            'phone_number' => 'required|string|max:15|regex:/^[0-9\-\(\)\/\+\s]*$/',
            'emergency_number' => 'required|string|max:15|regex:/^[0-9\-\(\)\/\+\s]*$/',
            'nationality' => 'required|string|max:100',
        ]);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' =>  bcrypt($data['password']),
            'date_of_birth' => $data['date_of_birth'],
            'gender' => $data['gender'],
            'role' => 'member',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $formattedDate = Carbon::now()->format('ymd');
        Member::create([
            'user_id' => $user->id,
            'joining_date' => $formattedDate,
            'phone_number' => $data['phone_number'],
            'emergency_number' => $data['emergency_number'],
            'nationality' => $data['nationality'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ], 201);
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }
}
