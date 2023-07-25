	$('#btnZone').click(function() {

		$.ajax({
			url: "libs/php/getTimezone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#north').val(),
				south: $('#south').val(),
				east: $('#east').val(),
				west: $('#west').val(),
			},
			success: function(result) {

				console.log(JSON.stringify(result));

				if (result.status.name == "ok") {

					$('txtzone').html(resilt['data']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				$('#txtZone').html('Timezone not found :(')
			}
		}); 
	
	});

	$('#btnCode').click(function() {

		$.ajax({
			url: "libs/php/getCountryCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCode').html(result['data']);
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				$('#txtCode').html("No Country found");
			}
		}); 
	});

	$('#btnTemp').click(function() {

		$.ajax({
			url: "libs/php/getWeather.php",
			type: 'POST',
			dataType: 'json',
			data: {
				north: $('#north').val(),
				south: $('#south').val(),
				east: $('#east').val(),
				west: $('#west').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtTemp').html("Temperature: ".concat(result['data'][0]['temperature']));
					$('#txtHumidity').html("Humidity: ".concat(result['data'][0]['humidity']));
					$('#txtCondition').html("Weather Condition: ".concat(result['data'][0]['weatherCondition']));
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				
				$('#txtTemp').html("No Weather found");
			}
		}); 
		});

		$('#btnSea').click(function() {

			$.ajax({
				url: "libs/php/getOcean.php",
				type: 'POST',
				dataType: 'json',
				data: {
					lat: $('#lat').val(),
					lng: $('#lng').val()
				},
				success: function(result) {
	
					console.log(result);
	
					if (result.status.name == "ok") {
	
						$('#txtSea').html(result['data']);
					} 
				
				},
				error: function(jqXHR, textStatus, errorThrown) {
					
					$('#txtSea').html("No Oceans Found");
				}
			}); 
		});
	