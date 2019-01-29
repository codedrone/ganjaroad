<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model {

    protected $table = 'menu';
    
    protected $guarded = ['id'];
    
    protected $fillable = ['title', 'url', 'style', 'published', 'target', 'position', 'parent'];
    
    public static function updatePositions($parent)
    {
        $collection = Menu::where('parent', '=', $parent)->orderBy('position', 'asc')->get();
        
        $counter = 0;
        foreach($collection as $item) {
            $category = Menu::find($item->id);
            $category->position = ++$counter;
            $category->save();
        }
    }
    
    public function haveChildrens()
    {
        $menu = Menu::where('parent', '=', $this->id)->where('published', '=', 1);

        if($menu->count()) {
            return true;
        }
        
        return false;
    }

}