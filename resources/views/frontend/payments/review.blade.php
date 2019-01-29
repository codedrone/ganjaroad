@extends('layouts/default')
{{-- Page title --}}
@section('title')
	@lang('front/general.review')
@parent
@stop

{{-- page level styles --}}
@section('header_styles')
    <!--page level css starts-->
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/vendors/datatables/css/dataTables.bootstrap.css') }}" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/frontend/payments.css') }}">
	<link type="text/css" rel="stylesheet" href="{{asset('assets/vendors/iCheck/css/all.css')}}" />
    <!--end of page level css-->
@stop

@section('breadcrumbs')
	<ol class="breadcrumb" style="margin-bottom: 5px;">
		<li><a href="{{ URL::to('/') }}">@lang('front/general.home')</a></li>
		<li class="active">@lang('front/general.review')</li>
	</ol>               
@stop

{{-- Page content --}}
@section('content')
    <!-- Container Section Strat -->
	<div class="wrapper">
		<hr>
		<div class="welcome">
			<h1>@lang('front/general.review')</h1>
			<h4 class="review-agree">@lang('front/general.review_agree_txt')</h4>
		</div>
		<hr>
		<div class="content text-center review-wrapper">
			@if($items)
				@php
					$cols = 6;
					$have_discount = false;
					$have_paid = false;
					foreach($items as $item) {
						if(isset($item['paid']) && $item['paid']) {
							$have_paid = true;
							$cols -= 2;
						}
						if(isset($item['discount']) && $item['discount']) {
							$have_discount = true;
							$cols -= 4;
						}
					}
				@endphp
				
				<div class="col-md-12 col-sm-12 text-left">
					{!! Form::open(array('url' => URL::to('coupon/submit'), 'method' => 'post', 'class' => 'bf', 'files'=> true)) !!}
						<div class="row coupons-wrapper">
							<div class="col-md-6">
								@lang('front/review.coupon_label')
							</div>
							<div class="col-md-4 text-right">
								<input class="form-control" name="coupon" id="coupon" type="text" @if(Session::has('coupon_code')) value="{{ Session::get('coupon_code') }}" @endif placeholder="@lang('front/review.coupon_placeholder')">
							</div>
							<div class="col-md-2 text-right">
								<button type="submit" class="btn btn-success">@lang('front/review.coupon_submit')</button>
							</div>
						</div>
					{!! Form::close() !!}
					
					{!! Form::open(array('url' => route('payment'), 'method' => 'get', 'id' => 'payment', 'class' => 'bf', 'files'=> false)) !!}
						<table class="table table-striped">
							<thead class="thead-inverse">
								<tr>
									<th class="col-md-1">@lang('front/general.qty')</th>
									<th class="col-md-2">@lang('front/general.type')</th>
									<th class="col-md-{{ $cols }}">@lang('front/general.item')</th>
									<th class="col-md-2">@lang('front/general.price')</th>
									@if($have_paid)
										<th class="col-md-2">@lang('front/general.price_paid')</th>
									@endif
									@if($have_discount)
										<th class="col-md-2">@lang('front/general.price_discount')</th>
										<th class="col-md-2">@lang('front/general.total')</th>
									@endif
									<th class="col-md-1 remove-cell"><span>@lang('front/general.remove')</span></th>
								</tr>
							</thead>
							<tbody>
								@foreach($items as $item)
									<tr>
										<td class="col-md-1">{{ $item['qty'] }}</td>
										<td class="col-md-2">{{ $item['type'] }}</td>
										<td class="col-md-{{ $cols }}">{{ $item['title'] }}</td>
										<td class="col-md-2">{{ TemplateHelper::convertPrice($item['price'] * $item['qty']) }}</td>
										@if($have_paid)
											<td class="col-md-2">{{ TemplateHelper::convertPrice($item['paid']) }}</td>
										@endif
										@if($have_discount)
											<td class="col-md-2">{{ TemplateHelper::convertPrice($item['discount']) }}</td>
											<td class="col-md-2">{{ TemplateHelper::convertPrice($item['price'] * $item['qty'] - $item['discount']) }}</td>
										@endif
										<td class="col-md-1">
											<a href="{{ route('review/confirm-delete/item', $item['item_id']) }}" class="modal-link">
												<i class="fa fa-times" aria-hidden="true"></i>
											</a>
										</td>
									</tr>
								@endforeach
							</tbody>
						</table>
						<table class="table table-striped">
							<tfoot>
								<tr class="agreement {{ $errors->first('marketing', 'has-error') }}">
									<td colspan="5">
										<div class="checkbox">
											<label>
												<a href="javascript:void(0)" data-toggle="modal" data-target="#popup">
													@lang('front/review.agreement_checkbox')
												</a>
												<input type="checkbox" name="marketing" value="1" />
											</label>
										</div>
										{!! $errors->first('marketing', '<span class="help-block">:message</span>') !!}
									</td>
								</tr>
                                <?php /*
                                @if(TemplateHelper::isDeveloper())
                                    <tr class="agreement recurring">
                                        <td colspan="5">
                                            <div class="checkbox">
                                                <label>
                                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#recurring">
                                                        @lang('front/review.automatically_renew_my_ads')
                                                    </a>
                                                    <input type="checkbox" name="recurring" value="1" checked />
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                @endif
                                 */ ?>
								<tr>
									<td>@lang('front/general.total')</td>
									<td>{!! TemplateHelper::renderTotal() !!}</td>
									<td>&nbsp;</td>
									<td>
										<button class="btn btn-danger" type="button" onclick="location.href='{{ route('failedpayment') }}'">@lang('front/review.cancel_payment')</button>
									</td>
									<td>
										<button class="btn btn-success" type="submit">@lang('front/review.procced_payment')</button>
									</td>
								</tr>
							</tfoot>
						</table>
					{!! Form::close() !!}
				</div>
			@else
				<p>@lang('front/general.review_empty')</p>
			@endif
		</div>
	</div>
@stop

{{-- page level scripts --}}
@section('footer_scripts')
<script type="text/javascript" src="{{ asset('assets/vendors/datatables/js/jquery.dataTables.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendors/datatables/js/dataTables.bootstrap.js') }}"></script>
<script type="text/javascript" src="{{ asset('assets/vendors/iCheck/js/icheck.js') }}"></script>

<div class="modal fade" id="modal_popup" tabindex="-1" role="dialog" aria-labelledby="payment_delete_confirm_title" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content"></div>
	</div>
</div>

<div class="modal fade" id="popup" tabindex="-1" role="dialog" aria-labelledby="popup_title" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">
					{!! TemplateHelper::getMarketingAgreementTitle() !!}
				</h4>
			</div>
			<div class="modal-body" id="text_modal_content">
				{!! TemplateHelper::getMarketingAgreementContent() !!}
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-dismiss="modal">@lang('general.close')</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="recurring" tabindex="-1" role="dialog" aria-labelledby="popup_title" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">
					{!! TemplateHelper::getRecurringPopupTitle() !!}
				</h4>
			</div>
			<div class="modal-body" id="text_modal_content">
				{!! TemplateHelper::getRecurringPopupContnet() !!}
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-danger" data-dismiss="modal">@lang('general.close')</button>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
jQuery(document).ready(function() {
	jQuery('body').on('hidden.bs.modal', '.modal', function () {
		jQuery(this).removeData('bs.modal');
	});
	
	jQuery("input[type='checkbox']").iCheck({
		checkboxClass: 'icheckbox_minimal-blue'
	});
});
</script>
@stop