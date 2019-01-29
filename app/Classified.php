<?php

namespace App;

use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use Cviebrock\EloquentTaggable\Taggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Helpers\Template;
use App\ClassifiedCategory;
use Request;
use App\Issues;
use Lang;
use Carbon\Carbon;

class Classified extends Model implements SluggableInterface {

    use SoftDeletes;
    use SluggableTrait;
  	use Taggable;

    protected $dates = ['deleted_at', 'last_updated'];

    protected $sluggable = [
        'build_from' => 'title',
        'save_to'    => 'slug',
    ];

    protected $table = 'classifieds';

    protected $fillable = ['title', 'slug', 'content', 'published', 'map_address', 'hide_map', 'lattitude', 'longitude', 'published', 'paid', 'approved', 'active'];
    
    protected $guarded = ['id'];

    public function save(array $options = [])
    {
        if(Template::isAdminRoute()) {
            try {
                $old_data = Classified::where('id', '=', $this->id)->firstOrFail();
                
                if($this->paid != $old_data->paid) {
                    $this->last_updated = Carbon::now();
                }
            } catch (ModelNotFoundException $e) {}
        }
        
        parent::save();
        Images::updateImages('classified', $this->id, Request::get('images'));
        if(Request::method() == 'PUT') Issues::removeIssues($this->id);
        if($this->active && $issues = Request::get('issues')) {
            $issue = Issues::insertIssues($this->id, 'classified', $issues);
            if($issue) {
                $link = Template::classifiedEditLink($this->id, $this->slug);
                
                $comment = '';
                foreach($issues as $issue_item) {
                    if($issue_item['code'] == 'words') $comment = $issue_item['comment'];
                }
                session(['warning' => Lang::get('front/general.classified_'.$issue.'_issue', array('link' => $link, 'comment' => $comment))]);
            }
        }
        
        return $this;
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
        $category_id = session('last_classifieds_category');
        if(!$category_id) $category_id = $this->categories()->lists('category_id')->first();
        
        try {
            return ClassifiedCategory::findOrFail($category_id);
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }
    
    public function last_category()
    {
        $category_id = $this->categories()->where('multicity', '=', 0)->lists('category_id')->last();

        try {
            return ClassifiedCategory::findOrFail($category_id);
        } catch (ModelNotFoundException $e) {
            return false;
        }
    }
    
    public function categories_ids()
    {
        return $this->categories()->lists('category_id')->toArray();
    }
    
    public function deafult_categories_ids()
    {
        return $this->categories()->where('multicity', '=', 0)->lists('category_id')->toArray();
    }
    
    public function categories()
    {
        return $this->hasMany('App\ClassifiedCategoryValues', 'classified_id');
    }
    
    public function multicategory()
    {
        return $this->hasMany('App\ClassifiedMulticategory', 'classified_id');
    }
    
    public function classifiedfields()
    {
        return $this->hasMany('App\ClassifiedFields');
    }
    
    public function classifiedfieldsvalues()
    {
        return $this->hasMany('App\ClassifiedFieldsValues');
    }
    
    public function author()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
	    
    public function reported()
    {
        return $this->hasMany('App\ReportedItems', 'item_id')->where('status', '=', 0);
    }
    
    public function isReported()
    {
        $max = Template::getSetting('max_reported');
        $reported = $this->reported->count();
        
        if($reported >= $max) return 1;
        else return 0;
    }
    
    public function issues()
    {
        return $this->hasMany('App\Issues', 'item_id')->where('type', 'LIKE', 'classified')->where('reviewed', '=', 0);
    }
    
    public function isActive()
    {
        /*
        $admin_approval = Template::getSetting('classified_approval');
        if($admin_approval && !$this->approved) return false;
        if(!$this->published) return false;
         
        if($this->isReported()) return false;
        if($this->issues()->count()) return false;
        */
        return $this->getActive()->where('id', '=', $this->id)->count();
    }
    
    public function getCost()
    {
        $tier = $this->countMulticity();
        $category = $this->last_category();
        $tier_price = $category->matchTierPrice($tier);

        if($tier_price) {
            $price = $tier_price;
        } else {
            $price = $category->getCost();
        }
        
        return $price;
    }
    
    public function getMulticities()
    {
        $main_categories = ClassifiedCategory::getMainCategories()->lists('id')->toArray();

        //return $this->categories()->where('multicity', '=', 1)->whereIn('category_id', $main_categories)->groupBy('category_id');
        return $this->multicategory();
    }
    
    public function countMulticity()
    {
        $size = $this->getMulticities()->get()->count();

        return ++$size; //include main category
    }
    
    public static function getActive()
    {
        $approval = (int)Template::getSetting('classified_approval');
        $max = Template::getSetting('max_reported');
        
        return Classified::whereDoesntHave('issues', function($query){
            $query->where('reviewed', '=', '0');
        })->has('reported', '<', $max)->where(function($query) use ($approval)
        {
            if($approval) $query->where('approved', '=', 1);
        })->where('published', '=', 1)->where('paid', '=', 1)->where('active', '=', 1);
        
    }
    
    public function images()
    {
        return $this->hasMany('App\Images', 'item_id')->where('type', 'LIKE', 'classified')->whereNull('deleted_at');
    }
    
    public function activeByUser()
    {
        return $this->active;
    }
}
