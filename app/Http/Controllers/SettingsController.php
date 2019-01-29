<?php

namespace App\Http\Controllers;

use App\Settings;
use App\Http\Requests;
use App\Http\Requests\SettingsRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Response;
use Sentinel;

use App\Helpers\Template;

class SettingsController extends WeedController
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $settings = Settings::all()->sortBy('position');

        return View('admin.settings.index', compact('settings'));
    }


    public function update(SettingsRequest $request)
    {
        $this->validateFields($request);
        try {
            $settings = Settings::all();
            foreach($settings as $field) {
                if($request->get($field->code) || $request->get($field->code) == 0) {
                    if(is_array($request->get($field->code)) && $field->type != 'cron') {
                        $new_val = implode(',', $request->get($field->code));
                    } elseif($field->type == 'image') {
                        if ($request->hasFile($field->code)) {
                            $file = $request->file($field->code);
                            $filename = $file->getClientOriginalName();
                            $extension = $file->getClientOriginalExtension() ?: 'png';
                            $folderName = Template::getSettingsImageDir();
                            $new_val = str_random(10) . '.' . $extension;

                            $destinationPath = public_path() . $folderName;
                            $request->file($field->code)->move($destinationPath, $new_val);
                            
                        } else continue;
                    } else $new_val = $request->get($field->code);
                    
                    $value = $new_val;
                    $model = Settings::findOrFail($field->id);
                    if($field->type == 'cron') {
                        $model->value = serialize($value);
                    } else {
                        $model->value = $value;
                    }
                    $model->save();
                }
            }
            
            return redirect('admin/settings')->with('success', trans('settings/message.success.update'));
        } catch (GroupNotFoundException $e) {
            return redirect('admin/settings')->withInput()->with('error', trans('settings/message.error.update'));
        }
      
    }

    private function validateFields(SettingsRequest $request)
    {
        $settings = Settings::all()->sortBy('position');
        foreach($settings as $field) {
            if($field->type == 'cron') {
                $value = $request->get($field->code)['input'];
                $request->request->add(['cron_value' => $value]);
                $this->validate($request, [
                    'cron_value' => 'required|integer',
                ]);
            }
            
            $this->validate($request, [
                $field->code => $field->rules,
            ]);
        }
    }
}
