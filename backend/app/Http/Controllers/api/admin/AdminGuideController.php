<?php

namespace App\Http\Controllers\api\admin;

use App\Http\Controllers\Controller;
use App\Models\Guide;
use Illuminate\Http\Request;

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
}
