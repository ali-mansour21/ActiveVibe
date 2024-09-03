<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class MemberMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the user is authenticated and has the role of 'member'
        if (Auth::check() && Auth::user()->role === 'member') {
            return $next($request);
        }

        // Redirect or return unauthorized response
        return response()->json(['status' => 'error', 'message' => 'Unauthorized'], 403);
    }
}
