@extends('emails/layouts/default')

@section('content')
@if($user->first_name)
	<p>@lang('emails/general.register.hello') {!! $user->first_name !!},</p>
@endif

<p>@lang('emails/general.register.welcome')</p>
<p>@lang('emails/general.register.activate')</p>
<p><a href="{!! $activationUrl !!}">{!! $activationUrl !!}</a></p>
<p>@lang('emails/general.register.body')</p>

<p>@lang('emails/general.register.regards'),</p>

<p>@lang('emails/general.register.rebards_name')</p>
@stop
