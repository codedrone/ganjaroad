<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Log;
use Carbon\Carbon;
use Mail;

use App\Classified as AppClassified;
use App\Helpers\Template;

class Email extends Command
{
     /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'email cron';
    protected $days = 7;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $classifieds_expire = Template::getSetting('classifieds_expire');
		$classifieds = AppClassified::where('last_updated', '>', Carbon::now()->addDays($this->days))->where('last_updated', '<', Carbon::now()->addDays($this->days + 1));

		if($classifieds->count()) {
			foreach($classifieds->get() as $classified) {
				$this->sendReminderEmail($classified);
			}
		}
    }
	
	private function sendReminderEmail(AppClassified $classified)
	{
        $author = $classified->author;
		$to = $author->email;
		$subject = trans('classified/emails.classifieds-reminder');
		$data = array();
		$data['days'] = $this->days;
		$data['user_name'] = $author->first_name . ' ' . $author->last_name;
        
		Mail::send('emails.classifieds-reminder', compact('data'), function ($m) use ($data, $to, $subject) {
			$m->from(env('MAIL_USERNAME', ''), env('MAIL_SENDER', ''));
			$m->to($to, trans('general.site_name'));
			$m->subject($subject);
		});
	}
}
