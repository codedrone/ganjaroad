<?php

namespace App\Http\Middleware;

use Closure;
use Route;
use App\Helpers\Template;

class WordsFilterMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */    
    public function handle($request, Closure $next)
    {
        
        $route = Route::getCurrentRoute()->getPath();
        $words = explode(',', Template::getSetting('words_filter'));
        $banned_words = array();
        
        foreach($request->all() as $data) {
            foreach($words as $word) {
                $word = trim($word);
                if(is_array($data)) {
                    if(in_array($word, $data)) {
                        $banned_words[$word] = $word;
                    }
                } else {
                    //if(preg_match_all('/\b'.$word.'\b/', $data, $matches, PREG_OFFSET_CAPTURE)) { //whole words
                    if (stripos(strip_tags($data), $word) !== false) {
                        $banned_words[$word] = $word;
                    }
                }
            }
        }

        if($banned_words) {
            $this->reportItem($request, $banned_words);
        }
        
        return $next($request);
    }
    
    private function reportItem($request, $words = array())
    {
        $issues = $request->get('issues', array());
        $issues[] = array(
            'code' => 'words',
            'comment' => implode(', ', $words)
        );
        $request->request->add(['issues' => $issues]);
        
    }
}
