<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class MobileController extends Controller
{
    public function login(Request $input)
    {

		$credentials = ['email'=>$input->email,
						'password'=>$input->password];

		if(Auth::attempt($credentials))
		{	
			echo "success";
		}	
		else
		{
			echo "failure";
			echo "failed for username ".$input->email." and for password ".$input->password;
			echo " request object = ".$input;
		}	
    }

    public function addProduct(Request $input)
    {
    	echo "add product works";
    }

}
