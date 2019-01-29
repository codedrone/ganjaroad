<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Log;

use App\Classified as AppClassified;
use App\Helpers\Template;

class Classified extends Command
{
     /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'classified';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'classified cron';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $classifieds_expire = Template::getSetting('classifieds_expire');
        $affected = AppClassified::where('last_updated', '<', $classifieds_expire)->where('paid', '=', 1)->update(['paid' => 0]);
    }
}
