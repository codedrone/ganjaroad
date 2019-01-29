<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Routing\Route;
use Sentinel;
use App\Helpers\AdminPermissionsList;
use App\Helpers\Template;

class CheckAdminPermissions
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
		$user = Sentinel::getUser();
		$route = $request->route();
		$action = str_replace('/', '.', $route->getName());
		$permissions_list = AdminPermissionsList::getPermissions();

        if($action == 'sales.approve.claim' || $action == 'sales.disapprove.claim') {
            $action = 'sales.approve';
        }
        
		if(Template::findArrayKey($permissions_list, $action)) {
			if(!$user->hasAccess($action)) {
				return redirect('/admin')->with('error', trans('permissions/general.not_authorized'));
			}
		}
		
		
        return $next($request);
    }
}
