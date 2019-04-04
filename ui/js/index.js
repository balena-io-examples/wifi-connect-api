$(function(){
	var networks = undefined;

	function showHideEnterpriseSettings() {
		var security = $(this).find(':selected').attr('data-security');
		if(security === 'enterprise') {
			$('#identity-group').show();
		} else {
			$('#identity-group').hide();
		}
	}

	$('#ssid-select').change(showHideEnterpriseSettings);

	$.get(wifiConnectEndpoint() + '/networks', function(data){
		if(data.length === 0){
			$('.before-submit').hide();
			$('#no-networks-message').removeClass('hidden');
		} else {
			networks = JSON.parse(data);
			$.each(networks, function(i, val){
				$('#ssid-select').append(
					$('<option>')
						.text(val.ssid)
						.attr('val', val.ssid)
						.attr('data-security', val.security)
				);
			});

			jQuery.proxy(showHideEnterpriseSettings, $('#ssid-select'))();
		}
	});

	$('#connect-form').submit(function(ev){
		let serialized = $('#connect-form').serialize();
		$.post(wifiConnectEndpoint() + '/connect', serialized, function(data){
			$.post('/custom', serialized, function(data){
				$('.before-submit').hide();
				$('#submit-message').removeClass('hidden');
			});
		});
		ev.preventDefault();
	});
});


function wifiConnectEndpoint() {
	return window.location.protocol + '//' + window.location.hostname + ':45454';
}
