<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Renderable
     */
    public function login(): Renderable
    {
        return view('user::components.login');
    }

    public function authenticate(Request $request): JsonResponse
    {
        $credentials = [
            'username' => $request->get('username'),
            'password' => $request->get('password')
        ];

        if (Auth::attempt($credentials) === false) {
            return response()->json(['message' => "Username or password is incorrect."], 401);
        }

        $user = $request->user();
        $token = $user->createToken('uToken')->accessToken;

        return response()->json(['token' => $token])->withCookie('_token', $token);
    }
}
