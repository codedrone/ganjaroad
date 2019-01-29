<?php

namespace App;

use App\Images;
use App\Plans;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Request;
use Carbon\Carbon;

use App\NearmeItems;
use DB;
use App\Helpers\Template;
use Gregwar\Image\Image;

class Nearme extends Model implements SluggableInterface {

    use SoftDeletes;
    use SluggableTrait;

    protected $dates = ['deleted_at', 'last_updated'];

    protected $sluggable = [
        'build_from' => 'title',
        'save_to'    => 'slug',
    ];

    protected $table = 'nearme';
    
    protected $fillable = ['category_id', 'user_id', 'title', 'slug', 'content', 'url', 'email', 'phone', 'first_time', 'facebook', 'instagram', 'twitter', 'other_address', 'full_address', 'delivery', 'atm', 'min_age', 'wheelchair', 'security', 'credit_cards', 'hours', 'published', 'active', 'paid', 'approved', 'lattitude', 'longitude', 'address1', 'address2', 'country', 'city', 'state', 'zip', 'last_updated'];
    
    protected $guarded = ['id'];

    public function save(array $options = [])
    {
        if(Template::isAdminRoute()) {
            try {
                $old_data = Nearme::where('id', '=', $this->id)->firstOrFail();
                
                if($this->paid != $old_data->paid) {
                    $this->last_updated = Carbon::now();
                }
            } catch (ModelNotFoundException $e) {}
        }
        
        if(is_array($this->hours)) $this->hours = serialize($this->hours);
        if(!$this->other_address) $this->other_address = 0;
        return parent::save();
    }
    
    protected function increment($column, $amount = 1, array $extra = [])
    {
        $this->timestamps = false;
        $increment = $this->incrementOrDecrement($column, $amount, $extra, 'increment');
        $this->timestamps = true;
        
        return $increment;
    }
    
    public function category()
    {
        return $this->belongsTo('App\NearmeCategory');
    }
	
    public function author()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    
    public function items()
    {
        return $this->hasMany('App\NearmeItems', 'nearme');
    }
	
    public function getNearmecategoryAttribute()
    {
        return $this->category->lists('id');
    }
    
    public function formatAddressShort($force = false)
    {
        $address = array();
        
        if(!$force && $this->other_address) {
            return $this->full_address;
        } else {
            if($this->address1) $address[] = $this->address1;
            if($this->address2) $address[] = $this->address2;
            if($this->city) $address[] = $this->city;
            if($this->state) $address[] = $this->state;
            if($this->zip) $address[] = $this->zip;

            return implode(', ', $address);
        }
        
        return '';
    }
    
    public function formatAddressFull($force = false)
    {
        if(!$force && $this->other_address) {
            return $this->full_address;
        } else {
            $address = array();
            if($this->address1) $address[] = $this->address1;
            if($this->address2) $address[] = $this->address2;
            if($this->city) $address[] = $this->city;
            if($this->state) $address[] = $this->state;
            if($this->zip) $address[] = $this->zip;

            if($this->country) {
                $countries = Template::getCountriesList(false);
                if(isset($countries[$this->country])) {
                    $address[] = $countries[$this->country];
                }
            }

            return implode(', ', $address);
        }
        
        return '';
    }
    
    public function getIcon()
    {
        if($icon = $this->category->icon) {
            return Template::getNearMeCategoryImageDir().$icon;
        } else return Template::getSetting('nearme_default_icon');
    }
    
    public function isActive()
    {
        /*$approval = Template::getSetting('nearme_approval');
        
        $isactive = $this->where('published', '=', 1)->where('active', '=', 1)->where('paid', '=', 1);
        if($approval) $isactive->where('approved', '=', 1);
        
        return $isactive->count();*/  
        return $this->getActive()->where('id', '=', $this->id)->count();
    }
    
    public function images()
    {
        return $this->hasMany('App\Images', 'item_id')->where('type', 'LIKE', 'nearme')->whereNull('deleted_at');
    }
    
    public function image()
    {
        /*$image = Images::where('item_id', '=', $this->id)->where('type', 'LIKE', 'nearme')->first();
        if($image) return $image->image;
        else return false;*/
        return $this->image;
    }
    
    public function getCost()
    {
        $plan = Plans::getItemPaymentPlan('nearme', $this);
        $price = 0;
        
        if($plan) {
            $price = $plan->amount;
        }
        
        return $price;
    }
    
    public static function getActive()
    {
        $approval = Template::getSetting('nearme_approval');
        
        return Nearme::where(function($query) use ($approval) {
            if($approval) $query->where('approved', '=', 1);
        })->where('published', '=', 1)->where('active', '=', 1)->where('paid', '=', 1); 
    }
    
    public function activeByUser()
    {
        return $this->active;
    }
}
