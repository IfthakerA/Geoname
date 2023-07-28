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
					$('#txtStationName').html('Staion: '.concat(result['data'][0]['stationName']));

				} 
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
				
				$('#txtTemp').html("No country found");
			}
		}); 
		});


$('#btnNeigh').click(function() {

		$.ajax({
			url: "libs/php/getNeighbours.php",
			type: 'POST',
			dataType: 'json',
			data: {
				geonameid: $('#geonameid').val()
			},
			success: function(result) {

				if (result.status.name == "ok") {
					
					$('#txtN1').html(result['data'][0]['countryName']); 
					$('#txtN2').html(result['data'][0]['population']);
					$('#txtN3').html(result['data'][0]['timezone']['timeZoneId']);

				}
			
			},
			error: function(jqXHR, status, error) {
						console.log('try a different no. ')
						
				}
		}); 
	
	});
	

	
