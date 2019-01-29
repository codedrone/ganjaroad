<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Log;

use App\Nearme as AppNearme;
use App\Helpers\Template;

class Nearme extends Command
{
     /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'nearme';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'nearme cron';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $nearme_expire = Template::getSetting('nearme_expire');
        $affected = AppNearme::where('last_updated', '<', $nearme_expire)->where('paid', '=', 1)->update(['paid' => 0]);
    }
}
