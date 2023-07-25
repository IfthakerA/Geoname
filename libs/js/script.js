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
				
				$('#txtCode').html(reslt['data']);
			}
		}); 
	});
	
	$('#btnSea').click(function() {

			$.ajax({
				url: "libs/php/getOcean.php",
				type: 'POST',
				dataType: 'json',
				data: {
					olat: $('#olat').val(),
					olng: $('#olng').val()
				},
				success: function(result) {
	
					console.log(result);
	
					if (result.status.name == "ok") {
					    
					    console.log(result['data']['name']);
						$('#txtSea').html(result['data']['name']);
					} 
				
				},
				error: function(jqXHR, textStatus, errorThrown) {
					
					$('#txtSea').html("No Oceans Found");
				}
			}); 
		});
	
	
	$('#btnZone').click(function() {

		$.ajax({
			url: "libs/php/getTimezone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {
				$('#TimezoneRes').html(result['data']['timezoneId']);
                $('#TzCountryRes').html(result['data']['countryName']);
                $('#TzTimeRes').html(result['data']['time']);

					
				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				
				$('#txtZone').html('No timezone found');
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
				
				
				$('#txtTemp').html("No country found");
			}
		}); 
		});

	
