@if ($ad && $link)
	<div class="right-add">
		<a href="{{ $link }}" target="_blank">
			<img src="{{ asset('uploads/ads/'.$ad->image) }}" alt="ad" />
		</a>
	</div>
@endif