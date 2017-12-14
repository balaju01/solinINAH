<?php

namespace App\Http\Controllers;

use JWTException;
use JWTAuth;

use Illuminate\Http\Request;

class ApiAuthController extends Controller
{
    //
    public function userAuth(Request $request){
    	$credentials = $request->only('email','password');
    	$token = null;

    	try{
    		if (!$token = JWTAuth::attempt($credentials)) {
    			return response()->json(['error'=>'invalid_credentials']);
    		}
    	}catch(JWTException $ex){
    		return response()->json(['error'=>'something_when_error'],500);
    	}
    	return response()->json(compact('token'));
    }
}
