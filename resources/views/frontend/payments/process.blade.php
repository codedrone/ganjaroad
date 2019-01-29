<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<meta property="og:site_name" content="Ganjaroad.com" />
	<meta property="og:title" content="Ganjaroad" />
	<meta property="og:url" content="{{ Request::url() }}" />
	<meta property="og:image" content="{{ asset('assets/images/fb_logo.png') }}" />
	<meta property="og:description" content="{{ TemplateHelper::getSetting('homepage_meta_description') }}" />
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	<![endif]-->
	<title>
		@lang('payments/title.process_payment')
	</title>
	<!--global css starts-->
	<!-- FONTS	-->
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/lib.css') }}">
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/fonts/Muli/stylesheet.css') }}" media="all" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/font-awesome.min.css') }}">
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap.css') }}" media="all" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-reboot.css') }}" media="all" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-grid.css') }}" media="all" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-components.css') }}" media="all" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap-select.css') }}" media="all" />
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}" media="all" /> 
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/global.css') }}" media="all" /> 
	<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/paymentform.css') }}" media="all" /> 
	
	@include('layouts/global_head')
</head>

<body>
    <!-- Header Start -->
	<header class="payment-header">
		<div class="container">
			<nav class="navbar navbar-full navbar-absolut-top"  role="navigation">
				<div class="container-button">
					<button class="c-hamburger c-hamburger--htx" type="button" data-toggle="collapse" data-target="#nav-content" tabindex="0"><span>@lang('front/general.toggle')</span></button>
				</div>
				<div class="col-sm-0 col-md-3 col-lg-2">
				
				</div>
				<div class="col-sm-12 col-md-6 col-lg-8 logo-wrapper">
					<h1 class="navbar-brand">
						<a href="{{ URL::to('/') }}">
							<img src="{{ asset('assets/images/logo.png') }}" srcset="{{ asset('assets/images/logo.png 1x') }}, {{ asset('assets/images/logo@2x.png 2x') }}" alt="Ganjaroad" width="282" height="51" />
						</a>
					</h1>
				</div>
				<div class="col-sm-12 col-md-3 col-lg-2 pull-md-right">
					<div class="collapse navbar-toggleable-sm" id="nav-content">
						<ul class="nav navbar-nav pull-md-right">
							<li><a href="{{ route('review') }}">@lang('payments/title.go_back')</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	
    <!-- Content -->
	<div class="main" role="main">
		<div class="container">
			@include('notifications')
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-md-6 col-center">
					<div class="panel panel-default credit-card-box">
						<div class="panel-heading display-table">
							<div class="row display-tr">
								<h3 class="panel-title display-td">@lang('payments/title.total')</h3>
								<div class="display-td center-align">
									{{ $total }}
								</div>
							</div>
						</div>
						<div class="panel-heading display-table">
							<div class="row display-tr">
								<h3 class="panel-title display-td">@lang('payments/title.accepted_cards')</h3>
								<div class="display-td" >
									<img class="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png">
								</div>
							</div>
						</div>
						<div class="panel-body">
							<form id="payment-form" method="POST" role="form" action="javascript:void(0)"> 
								<input type="hidden" name="_token" value="{{ csrf_token() }}" />
								<div class="row">
									<div class="col-xs-12">
										<div class="form-group">
											<label for="cardNumber">@lang('payments/title.cc_number')</label>
											<div class="input-group">
												<input 
													type="text"
													class="form-control"
													name="cardNumber"
													placeholder="Valid Card Number"
													autocomplete="cc-number"
													required autofocus 
												/>
												<span class="input-group-addon"><i class="fa fa-credit-card"></i></span>
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-7 col-md-7">
										<div class="form-group">
											<label for="cardExpiry"><span class="hidden-xs">@lang('payments/title.expiration')</span><span class="visible-xs-inline">@lang('payments/title.exp')</span> @lang('payments/title.date')</label>
											<input 
												type="text" 
												class="form-control" 
												name="cardExpiry"
												placeholder="MM / YY"
												autocomplete="cc-exp"
												required 
											/>
										</div>
									</div>
									<div class="col-xs-5 col-md-5 pull-right">
										<div class="form-group">
											<label for="cardCVC">@lang('payments/title.cvc_code')</label>
											<input 
												type="text" 
												class="form-control"
												name="cardCVC"
												placeholder="CVC"
												autocomplete="cc-csc"
												required
											/>
										</div>
									</div>
								</div>
								<div class="row reponse-row">
									<div class="col-xs-12" id="response" style="display:none;">
										<div class="form-group">
											<label for="couponCode">@lang('payments/title.response')</label>
											<div id="response-msg"></div>
										</div>
									</div>
								</div>
								<?php /*
								<div class="row">
									<div class="col-xs-12">
										<div class="form-group">
											<label for="couponCode">@lang('payments/title.coupon_code')</label>
											<input type="text" class="form-control" name="couponCode" />
										</div>
									</div>
								</div>
								*/ ?>
								<div class="row">
									<div class="col-xs-12">
										<button class="submit btn btn-success btn-lg btn-block" type="button">@lang('payments/title.make_payment')</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    <!-- Footer Section Start -->
	<footer class="footer" role="contentinfo">
		<div class="container">
			<div class="copyright">
				{!! TemplateHelper::getCopyright() !!}
			</div>
		</div>
	</footer>
	
	<script src="{{ asset('assets/js/vendor/jquery-1.10.2.min.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/vendor/bootstrap.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/bootstrap-select/bootstrap-select.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/jquery.matchHeight.js') }}"></script>
	<script type="text/javascript" src="{{ asset('assets/js/fns.js') }}"></script>	
	<script src="{{ asset('assets/js/raphael-min.js') }}"></script>
    <script src="{{ asset('assets/js/livicons-1.4.min.js') }}"></script>
	
	<script src="{{ asset('assets/js/vendor/jquery.validate.min.js') }}"></script>
	<script src="{{ asset('assets/js/vendor/jquery.payment.min.js') }}"></script>

	
	<script type="text/javascript">
	jQuery("document").ready(function() {
		var $form = jQuery('#payment-form');
		$form.find('.submit').on('click', submitForm);

		function submitForm(e) {
			e.preventDefault();
			if (!validator.form()) {
				return;
			}

			$form.find('.submit').html('@lang('payments/title.validating') <i class="fa fa-spinner fa-pulse"></i>').prop('disabled', true);
			jQuery.showLoader();
			jQuery('#response').html('');
			
			jQuery.ajax({
				url: '{{ route('processpayment') }}',
				type: 'post',
				data: {'cc_number': jQuery('input[name=cardNumber]').val(), 'cc_date': jQuery('input[name=cardExpiry]').val(), 'cc_cvc': jQuery('input[name=cardCVC]').val(), 'recurring': '{{ Request::get('recurring') }}', '_token': jQuery('input[name=_token]').val()},
				success: function(response){
				console.log(response);
				console.log(response.msg);
					if(response.success && response.redirect) {
						window.location.replace(response.redirect);
					} else {
						showErrorReponse(response.msg);
					}
				}
			}).done(function() {
				$form.find('.submit').html('@lang('payments/title.make_payment')').prop('disabled', false);
				jQuery.hideLoader();
			});
		}
		
		function showErrorReponse(msg) {
			jQuery('#response').fadeIn();
			jQuery('#response').html(msg);
		}
		
		jQuery('input[name=cardNumber]').payment('formatCardNumber');
		jQuery('input[name=cardExpiry').payment('formatCardExpiry');
		jQuery('input[name=cardCVC]').payment('formatCardCVC');

		jQuery.validator.addMethod("cardNumber", function(value, element) {
			return jQuery.payment.validateCardNumber(value);
		}, "Please specify a valid credit card number.");

		jQuery.validator.addMethod("cardExpiry", function(value, element) {
			var cc_date = jQuery.payment.cardExpiryVal(value);
			return jQuery.payment.validateCardExpiry(cc_date)
		}, "Invalid expiration date.");

		jQuery.validator.addMethod("cardCVC", function(value, element) {
			return jQuery.payment.validateCardCVC(value);
		}, "Invalid CVC.");

		validator = $form.validate({
			rules: {
				cardNumber: {
					required: true,
					cardNumber: true            
				},
				cardExpiry: {
					required: true,
					cardExpiry: true
				},
				cardCVC: {
					required: true,
					cardCVC: true
				}
			},
			highlight: function(element) {
				jQuery(element).closest('.form-control').removeClass('success').addClass('error');
			},
			unhighlight: function(element) {
				jQuery(element).closest('.form-control').removeClass('error').addClass('success');
			},
			errorPlacement: function(error, element) {
				jQuery(element).closest('.form-group').append(error);
			}
		});

		paymentFormReady = function() {
			if ($form.find('[name=cardNumber]').hasClass("success") &&
				$form.find('[name=cardExpiry]').hasClass("success") &&
				$form.find('[name=cardCVC]').val().length > 1) {
				$form.find('.submit').prop('disabled', false);
				
				return true;
			} else {
				$form.find('.submit').prop('disabled', true);
				
				return false;
			}
		}

		var readyInterval = setInterval(function() {
			if (paymentFormReady()) {
				clearInterval(readyInterval);
			}
		}, 250);
		
		var filled = true;
		$form.find('input').each(function() {
		   var element = jQuery(this);
		   if (element.val() == "") {
			   filled = false;
		   }
		});

		if(filled) {
			validator.form();
		}
	});
	</script>
</body>

</html>
