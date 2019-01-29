<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        require base_path() . '/resources/macros/Permissions.php';
        require base_path() . '/resources/macros/SelectCategories.php';
        require base_path() . '/resources/macros/SelectWithAttribute.php';
        require base_path() . '/resources/macros/ExtraFields.php';
        require base_path() . '/resources/macros/Published.php';
        require base_path() . '/resources/macros/Active.php';
        require base_path() . '/resources/macros/Author.php';
        require base_path() . '/resources/macros/SelectState.php';
        require base_path() . '/resources/macros/YesNo.php';
        require base_path() . '/resources/macros/SelectCountry.php';
        require base_path() . '/resources/macros/DateTimeInput.php';
        require base_path() . '/resources/macros/Settings.php';
        require base_path() . '/resources/macros/Hours.php';
        require base_path() . '/resources/macros/NearmeItems.php';
        require base_path() . '/resources/macros/UrlInput.php';
        require base_path() . '/resources/macros/TableYesNo.php';
        require base_path() . '/resources/macros/Access.php';
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        
    }
}
