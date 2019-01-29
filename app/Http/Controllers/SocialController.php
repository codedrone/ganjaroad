<?php

namespace App\Http\Controllers;

use Activation;
use Laravel\Socialite\Contracts\Factory as Socialite;
use Sentinel;
use Lang;
use Redirect;
use Mail;

class SocialController extends WeedController
{
    
    public function __construct(Socialite $socialite)
    {
        $this->socialite = $socialite;        
    }

    public function getSocialAuth($provider = null)
    {
        if (Sentinel::guest()) {
            if(!config("services.$provider")) abort('404'); //just to handle providers that doesn't exist
            return $this->socialite->with($provider)->redirect();
        } else {
            return Redirect::route('home');
        }
    }

    public function getSocialAuthCallback($provider = null)
    {
        if (Sentinel::guest()) {
            if($user = $this->socialite->with($provider)->user()){
                if($provider == 'facebook') return $this->handleFacebook($user);
                elseif($provider == 'twitter') return $this->handleTwitter($user);
            }else{
                return 'something went wrong';
            }
        } else {
            return Redirect::route('home');
        }
    }
    
    public function userExist($email)
    {
        $credentials = [
            'email' => $email,
        ];

        $user = Sentinel::findByCredentials($credentials);

        if($user) {
            Sentinel::login($user);
            
            return $user;
        }
        
        return false;
    }
    
    public function handleFacebook($fb_user)
    {
        if(isset($fb_user->user)) {
            $login = $this->userExist($fb_user->user['email']);
            if($login) {
                
            } else {
                $this->facebookRegister($fb_user);
            }
            
            return $this->afterSocial();
        }
    }
    
    public function handleTwitter($tw_user)
    {
        if(isset($tw_user->user)) {
            $login = $this->userExist($tw_user->email);

            if($login) {
                
            } else {
                $this->twitterRegister($tw_user);
            }
            
            return $this->afterSocial();
        }
    }
    
    public function facebookRegister($user)
    {
        $users = Sentinel::getUserRepository();
        $model = $users->getModel();
        $uniquePassword = str_random(8);

        $full_name = explode(' ', $user->user['name']);
        if(isset($full_name[0])) $fname = $full_name[0];
        else $fname = '';
        
        if(isset($full_name[1])) $lname = $full_name[1];
        else $lname = '';
        
        $fields = array(
            'email' => $user->user['email'],
            'password' => $uniquePassword,
            'published' => 1,
            'first_name' => $fname,
            'last_name' => $lname,
            'pic' => $user->avatar_original,
        );
        
        $user = Sentinel::register($fields, true); // no need to activate
         
        $role = Sentinel::findRoleByName('User');
        $role->users()->attach($user);
        
        Sentinel::login($user);
        
        $this->sendEmail($fields);
    }
    
    public function twitterRegister($user)
    {
        $users = Sentinel::getUserRepository();
        $model = $users->getModel();
        $uniquePasswords = str_random(8);

        $full_name = explode(' ', $user->name);
        if(isset($full_name[0])) $fname = $full_name[0];
        else $fname = '';
        
        if(isset($full_name[1])) $lname = $full_name[1];
        else $lname = '';
        
        $fields = array(
            'email' => $user->email,
            'password' => $uniquePasswords,
            'published' => 1,
            'first_name' => $fname,
            'last_name' => $lname,
            'pic' => $user->avatar_original,
        );
        
        $user = Sentinel::register($fields, true); // no need to activate
         
        $role = Sentinel::findRoleByName('User');
        $role->users()->attach($user);
        
        Sentinel::login($user);
        
        $this->sendEmail($fields);
    }
    
    public function sendEmail($data)
    {
        $user = Sentinel::getUser();
        Mail::send('emails.register-social', $data, function ($m) use ($user) {
            $m->to($user->email, $user->first_name . ' ' . $user->last_name);
            $m->subject('Welcome ' . $user->first_name);
        });
    }
    
    public function afterSocial()
    {
        if(Sentinel::getUser()) {
            return Redirect::route('my-account')->with('success', Lang::get('auth/message.login.success'));
        } else {
            return Redirect::route('login')->with('error', Lang::get('auth/message.signup.error'));
        }
    }
}
