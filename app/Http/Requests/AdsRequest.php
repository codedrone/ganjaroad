<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use Validator;
use App\Helpers\Template;

class AdsRequest extends Request {

	public function authorize()
	{
		return true;
	}


	public function rules()
	{
        if(Request::is('admin/*')) {
            return [
                'title' => 'required|min:3',
                'url' => 'url|required|min:3',
                'position_id' => 'required|exists:ads_positions,id',
            ];
        } else {
            return [
                'title' => 'required|min:3',
                'url' => 'url|required|min:3',
                'position_id' => 'required|exists:ads_positions,id',
                'published_from' => 'required|date',
                'published_to' => 'required|date'
            ];
        }
	}

    public function moreValidation($validator)
    {
        $validator->after(function($validator) {
            $img_max_size = Template::getUploadFileMaxSize();
            $rules = array(
                'image' => 'image|mimes:jpg,jpeg,bmp,png|max:'.$img_max_size,
            );

            if(Request::hasFile('image')) {
                $custom_validator = Validator::make(Request::only('image'), $rules);
                $errors = $validator->errors();
                $errors->merge($custom_validator->errors()); 
            }
            return $validator;
        });
    }
}
