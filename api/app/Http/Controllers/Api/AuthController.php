<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;


class AuthController extends Controller
{
    public function register(Request $request) {

        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'

        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        $welcomeMessage = "Bienvenido, " . $user->name . "! Tu registro fue exitoso. Te hemos enviado un correo de confirmación a " . $user->email . ".";


        return response()->json([
            
            "message" => $welcomeMessage


        ]);

    }

    public function login(Request $request){

        $credentials= $request->validate([
            'email' => ['required','email'],
            'password' =>['required'],
           
        ]);

        if (Auth::attempt ($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('cookie_token',$token, 60 * 24);
            return response(["token"=>$token],HttpResponse::HTTP_OK)->withoutCookie($cookie);    

        }else{
            return response(["message" =>"Credenciales invalida"],HttpResponse::HTTP_UNAUTHORIZED);
        }
        
    }
    public function userProfile(Request $request){

        return response()->json([
            "message" => "userProfile OK",
            "userData" => auth()->user()

        ], HttpResponse::HTTP_OK);
    }
    public function logout(Request $request){
        $cookie = Cookie::forget('cookie_token');
        return response(["message"=>"Cierre de  sesion Ok"], HttpResponse::HTTP_OK)->withCookie($cookie);
        
    }
    public function allUser(Request $request){
        
    }
}
