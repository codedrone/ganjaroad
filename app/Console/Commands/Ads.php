<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Log;
use Carbon\Carbon;

use App\Ads as AppAds;

class Ads extends Command
{
     /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ads';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'ads cron';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
		Log::info('ads cron run');
        $affected = AppAds::where('published_to', '<', Carbon::now())->update(['published' => 0, 'paid' => 0]);
    }
}
