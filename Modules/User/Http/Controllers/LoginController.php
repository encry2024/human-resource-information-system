<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Renderable
     */
    public function login() : Renderable
    {
        return view('user::components.login');
    }

    public function authenticate(Request $request) : JsonResponse
    {
        return response()->json($request->all());
    }
}
