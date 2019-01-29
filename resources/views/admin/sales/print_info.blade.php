@if($print)
	<style>
		.table th, .table td{text-align: center;}
		.table .items{width: 300px;}
	</style>
@endif

<table class="table table-bordered" id="table">
	<thead>
		<tr class="filters">
			<th>@lang('sales/table.info_id')</th>
			<th>@lang('sales/table.user_name')</th>
			@if(!$print)
				<th>@lang('sales/table.user_email')</th>
			@endif
			<th class="items">@lang('sales/table.items')</th>
			<th>@lang('sales/table.amount')</th>
			<th>@lang('sales/table.paid')</th>
			<th>@lang('sales/table.created_at')</th>
		</tr>
	</thead>
	<tbody>
		@if(!empty($payments))
			@foreach ($payments as $payment)
				<tr>
					<td>{{ $payment->id }}</td>
					<td>{{ $payment->author->getFullName() }}</td>
					@if(!$print)
						<td>{{ $payment->author->email }}</td>
					@endif
					<td>
						@if(count($payment->items))
							<table class="table items">
								<tr>
									<th>@lang('sales/table.ad_id')</th>
									@if(!$print)
										<th>@lang('sales/table.ad_name')</th>
									@endif
									<th>@lang('sales/table.ad_type')</th>
									<th>@lang('sales/table.ad_cost')</th>
								</tr>
								@foreach($payment->items as $item)
									<tr>
										<td>{{ $item->item_id }}</td>
										@if(!$print)
											<td>{{ $item->getItemTitle() }}</td>
										@endif
										<td>{{ $item->type }}</td>
										<td>{{ TemplateHelper::convertPrice($item->price) }}</td>
									</tr>
								@endforeach
							</table>
						@endif
					</td>
					<td>{{ TemplateHelper::convertPrice($payment->amount) }}</td>
					<td data-order="{{ ($payment->paid) ? 1 : 0 }}">{!! Form::Published($payment->paid) !!}</td>
					<td data-order="{{ $payment->created_at->timestamp }}">{{ TemplateHelper::formatDateTime($payment->created_at) }}</td>
				</tr>
			@endforeach
		@endif
	</tbody>
</table>              