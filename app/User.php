<?php 
namespace App;

use Cartalyst\Sentinel\Users\EloquentUser as SentinelUser;
use Illuminate\Database\Eloquent\SoftDeletes;
use Sentinel;
use Session;
use App\Claim;

use App\Helpers\Template;

class User extends SentinelUser
{
    private $super_user_group = 'super-admin';
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes to be fillable from the model.
	 *
	 * A dirty hack to allow fields to be fillable by calling empty fillable array
	 *
	 * @var array
	 */
	protected $fillable = [];
	protected $guarded = ['id'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password', 'remember_token'];

	/**
	* To allow soft deletes
	*/
	use SoftDeletes;

    protected $dates = ['deleted_at'];
        
    public static function login(UserInterface $user, $remember = false)
    {
        return Sentinel::login($user, $remember);
        /*
        $user = Sentinel::login($user, false);
        if($user) {
            if(Template::isAdminRoute()) {
                Session::set('admin_session', 1);
            } else {
                Session::set('user_session', 1);
            }
            return $user;
        }
        
        return false;
        */
    }
    
    public static function authenticate($credentials, $remember = false, $login = true)
    {
        return Sentinel::authenticate($credentials, $remember, $login);
        
        /*
        $user = Sentinel::authenticate($credentials, $remember, $login);
        
        if($user) {
            if(Template::isAdminRoute()) {
                Session::set('admin_session', 1);
            } else {
                Session::set('user_session', 1);
            }
            return $user;
        }
        
        return false;
        */
    }
    
    public static function check()
    {        
       
        return Sentinel::check();
        
        /*if(Template::isAdminRoute()) {
            $admin_session = (bool)Session::get('admin_session');
            if(!$admin_session) return false;            
        } else {
            $user_session = (bool)Session::get('user_session');
            if(!$user_session) return false;
        }*/

    }
    
    public static function logout()
    {
        
        Sentinel::logout();
        Session::flush();
        /* 
        Session::forget('admin_session');
        Session::forget('user_session');
        */
        
    }
    
    public static function guest()
    {
        return !User::check();
    }
    
    public function nearme()
    {
        return $this->hasMany('App\Nearme', 'user_id');
    }
    
    public function claims()
    {
        return $this->hasMany('App\Claim', 'user_id');
    }
    
    public function canBeClaimed()
    {
        $roles = $this->getRoles()->lists('id')->all();
        $current_user = Sentinel::getUser();
        $current_user_roles = $current_user->getRoles()->lists('id')->all();
        
        if(!$this->isSuperAdmin()) {
            $claim = Claim::where('user_id', '=', $this->id)->where('approved', '=', '1')->orWhere('admin_id', '=', $current_user->id);
            $claim = Claim::where(function($query)
            {
                $query->where('user_id', '=', $this->id);
                $query->where('approved', '=', 1);
            })->orWhere(function($query) use ($current_user)
            {
                $query->where('user_id', '=', $this->id);
                $query->where('admin_id', '=', $current_user->id);
            })->count();
            
            if($claim == 0) return true;
        }
        
        return false;
    }
    
    public function alreadyClaimed()
    {
        $current_user = Sentinel::getUser();
        $claim = Claim::where('user_id', '=', $this->id)->where('approved', '=', 1)->count();

        if($claim) return true;
        else return false;
    }
    
    public function claimedBy()
    {
        try {
            $claim = Claim::where('user_id', '=', $this->id)->where('approved', '=', 1)->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return false;
        }
        
        return Sentinel::findById($claim->admin_id);
    }
    
    public function claimedByCurrentUser()
    {
        $current_user = Sentinel::getUser();
        $claim = Claim::where('admin_id', '=', $current_user->id)->where('user_id', '=', $this->id)->count();
        
        if($claim > 0) return true;
        else return false;
    }
    
    public function cantClaim()
    {
        $current_user = Sentinel::getUser();
        $claim = Claim::where('admin_id', '=', $current_user->id)->where('user_id', '=', $this->id)->where('reviewed', '=', 1)->where('approved', '=', 0)->count();
        
        if($claim > 0) return true;
        else return false;
    }
    
    public function getFullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
    
    public function getAmountSpent()
    {
        return Payments::where('user_id', '=', $this->id)->where('paid', '=', '1')->sum('amount');
    }
    
    public function getSalesAmount()
    {
        
        $users = Claim::where('admin_id', '=', $this->id)->where('approved', '=', '1')->lists('user_id')->toArray();
        if($users) {
            return Payments::whereIn('user_id', $users)->where('paid', '=', '1')->sum('amount');
        } else return 0;
    }
    
    public function isSuperAdmin()
    {
        return (bool)$this->inRole($this->super_user_group);
    }
    
    public function getFormatedAddress()
    {
        $loc = array();
        if($this->country == 'US') {
            if($this->city) $loc[] = $this->city.',';
            if($this->state) $loc[] = $this->state.'.';
            $loc[] = $this->country;
        } else {
            if($this->country) {
                $countries = Template::getCountriesList(false);
                if(isset($countries[$this->country])) {
                    $loc[] = $countries[$this->country].',';
                }
            }
            if($this->city) $loc[] = $this->city;
        }
        
        if($loc) return implode(' ', $loc);
        else return '';
        
    }
    
}
