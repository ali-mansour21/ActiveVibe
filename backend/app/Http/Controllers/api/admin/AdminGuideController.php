<?php

namespace App\Http\Controllers\api\admin;

use App\Http\Controllers\Controller;
use App\Models\Guide;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminGuideController extends Controller
{
    public function get_guides()
    {
        // Fetch guides along with their related user data
        $guides = Guide::with('user:id,name,email,password,date_of_birth,gender')
            ->get(['id', 'dashboard_username', 'dashboard_password']); // Get specific fields from the Guide table

        // Transform the data to include user fields directly with the guide details
        $guideData = $guides->map(function ($guide) {
            return [
                'id' => $guide->id,
                'name' => $guide->user->name,
                'email' => $guide->user->email,
                'password' => $guide->user->password,
                'date_of_birth' => $guide->user->date_of_birth,
                'gender' => $guide->user->gender,
                'dashboard_username' => $guide->dashboard_username,
                'dashboard_password' => $guide->dashboard_password,
            ];
        });

        return response()->json(['status' => 'success', 'data' => $guideData]);
    }
    public function create_guides(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'date_of_birth' => 'required|date|before:today',
            'gender' => 'required|in:male,female',
            'dashboard_username' => 'required|string|unique:guides,dashboard_username',
            'dashboard_password' => 'required|string|min:8',
        ]);

        // If validation fails, return an error response
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        // Create a new user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'date_of_birth' => $request->date_of_birth,
            'gender' => $request->gender,
            'role' => 'guide'
        ]);


        Guide::create([
            'user_id' => $user->id,
            'dashboard_username' => $request->dashboard_username,
            'dashboard_password' => Hash::make($request->dashboard_password),
        ]);
        return response()->json(['status' => 'success', 'message' => 'Guide Created Successfully']);
    }
}
