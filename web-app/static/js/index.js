$(function(){
	$.get(wifiConnectEndpoint() + '/ssid', function(data){
		if(data.length === 0){
			$('.before-submit').hide();
			$('#no-networks-message').removeClass('hidden');
		} else {
			$.each(JSON.parse(data), function(i, val){
				$("#ssid-select").append($('<option>').attr('val', val).text(val));
			});
		}
	});

	$('#connect-form').submit(function(ev){
		$.post(wifiConnectEndpoint() + '/connect', $('#connect-form').serialize(), function(data){
			$('.before-submit').hide();
			$('#submit-message').removeClass('hidden');
		});
		ev.preventDefault();
	});
});

function wifiConnectEndpoint() {
	return window.location.protocol + '//' + window.location.hostname + ':45454';
}
