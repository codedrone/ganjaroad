<?php

namespace App;

use App\Plans;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use Cviebrock\EloquentTaggable\Taggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use Carbon\Carbon;
use App\Helpers\Template;

class Ads extends Model implements SluggableInterface {

    use SoftDeletes;
    use SluggableTrait;
  	use Taggable;

    protected $dates = ['deleted_at', 'last_updated'];

    protected $sluggable = [
        'build_from' => 'title',
        'save_to'    => 'slug',
    ];

    protected $table = 'ads';

    protected $fillable = ['position_id', 'title', 'slug', 'url', 'published_from', 'published_to', 'published', 'paid', 'approved', 'company'];
    
    protected $guarded = ['id'];

    public function positions()
    {
        return $this->belongsTo('App\AdsPositions', 'position_id');
    }
	
    public function author()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    
    public function companydetails()
    {
        return $this->belongsTo('App\AdsCompanies', 'company', 'id');
    }
    
    protected function increment($column, $amount = 1, array $extra = [])
    {
        $this->timestamps = false;
        $increment = $this->incrementOrDecrement($column, $amount, $extra, 'increment');
        $this->timestamps = true;
        
        return $increment;
    }
    
    public function save(array $options = [])
    {
        if(Template::isAdminRoute()) {
            try {
                $old_data = Ads::where('id', '=', $this->id)->firstOrFail();
                
                if($this->paid != $old_data->paid) {
                    $this->last_updated = Carbon::now();
                }
            } catch (ModelNotFoundException $e) {}
        }
        
        return parent::save();
    }
    
    public function getCost()
    {
        $plan = Plans::getItemPaymentPlan('ads', $this);
        $price = 0;
        
        if($plan) {
            $price = $plan->amount;
        }
        
        return $price;
    }
    
    public static function getActive()
    {
        $approval = (bool)Template::getSetting('ads_approval');
        
        return Ads::where(function($query)
        {
            $query->where('published_from', '<=', Carbon::now());
            $query->orWhereNull('published_from');
        })->where(function($query)
        {
            $query->where('published_to', '>', Carbon::now());
            $query->orWhereNull('published_to');
        })->where(function($query) use ($approval)
        {
            if($approval) $query->where('approved', '=', 1);
        })->where('published', '=', 1)->where('paid', '=', 1);
    }
    
    public static function getPendingAds()
    {
        $approval = (int)Template::getSetting('ads_approval');
        if($approval) {
            $ads = Ads::where(function($query) {
                /*$query->where('published_from', '<=', Carbon::now());
                $query->orWhereNull('published_from');*/
            })->where(function($query) {
                /*$query->where('published_to', '>', Carbon::now());
                $query->orWhereNull('published_to');*/
            })->where('approved', '=', 0)->where('published', '=', 1)->where('paid', '=', 1);
        } else $ads = array();

        return $ads;
    }
    
    public function activeByUser()
    {
        return $this->published;
    }
}
