@extends('admin/layouts/default')

{{-- Page title --}}
@section('title')
    @lang('page/title.edit')
@parent
@stop

{{-- page level styles --}}
@section('header_styles')

    <link href="{{ asset('assets/vendors/summernote/summernote.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/vendors/select2/css/select2.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('assets/vendors/bootstrap-tagsinput/css/bootstrap-tagsinput.css') }}" rel="stylesheet" />
    <link href="{{ asset('assets/css/pages/blog.css') }}" rel="stylesheet" type="text/css">

    <!--end of page level css-->
@stop


{{-- Page content --}}
@section('content')
<section class="content-header">
    <!--section starts-->
    <h1>@lang('page/title.edit')</h1>
    <ol class="breadcrumb">
        <li>
            <a href="{{ route('dashboard') }}"> <i class="livicon" data-name="home" data-size="14" data-c="#000" data-loop="true"></i>
                @lang('general.home')
            </a>
        </li>
        <li>
            <a href="#">@lang('page/title.page')</a>
        </li>
        <li class="active">@lang('page/title.edit')</li>
    </ol>
</section>
<!--section ends-->
<section class="content paddingleft_right15">
    <!--main content-->
    <div class="row">
        <div class="the-box no-border">
			<!-- errors -->
            <div class="has-error">
				@if($errors->has())
				   @foreach ($errors->all() as $error)
						<span class="help-block">{{ $error }}</span>
				  @endforeach
				@endif
            </div>
			{!! Form::model($page, array('url' => URL::to('admin/page/' . $page->id.'/edit'), 'method' => 'post', 'class' => 'bf', 'files'=> true)) !!}
                 <div class="row">
                    <div class="col-sm-8">
                        <div class="form-group">
                            {!! Form::text('title', null, array('class' => 'form-control input-lg', 'required' => 'required', 'placeholder'=> trans('page/form.title'))) !!}
                        </div>
                        <div class='box-body pad'>
                            {!! TemplateHelper::renderWyswingEditor($page->content) !!}
                        </div>
                    </div>
                    <!-- /.col-sm-8 -->
                    <div class="col-sm-4">
						<div class="form-group">
                            {!! Form::label('published', trans('page/form.published')) !!}
                            {!! Form::select('published', array('0' => trans('general.no'), '1' => trans('general.yes')), null, array('class' => 'form-control select2')) !!}
                        </div>
						
                        <div class="form-group">
                            <div class="form-group">
                                {!! Form::text('url', null, array('class' => 'form-control input-lg', 'required' => 'required', 'placeholder'=> trans('page/form.url'))) !!}
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="form-group">
                                {!! Form::textarea('meta_description', null, array('class' => 'form-control input-lg', '', 'placeholder'=> trans('page/form.meta-desc'))) !!}
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <div class="form-group">
                                {!! Form::textarea('meta_keywords', null, array('class' => 'form-control input-lg', '', 'placeholder'=> trans('page/form.meta-keywords'))) !!}
                            </div>
                        </div>
                     
                      
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">@lang('page/form.publish')</button>
                            <a href="{!! URL::to('admin/page') !!}"
                               class="btn btn-danger">@lang('page/form.discard')</a>
                        </div>
                    </div>
                    <!-- /.col-sm-4 --> </div>
                <!-- /.row -->
				<input type="hidden" id="id" name="id" class="form-control" value="{!! $page->id !!}" />
                {!! Form::close() !!}
        </div>
    </div>
    <!--main content ends-->
</section>
@stop
{{-- page level scripts --}}
@section('footer_scripts')
<!-- begining of page level js -->
<!--edit page-->
<script src="{{ asset('assets/vendors/summernote/summernote.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/vendors/select2/js/select2.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/vendors/bootstrap-tagsinput/js/bootstrap-tagsinput.js') }}" type="text/javascript" ></script>
<script src="{{ asset('assets/js/pages/add_newblog.js') }}" type="text/javascript"></script>
@stop