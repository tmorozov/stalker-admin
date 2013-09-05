app.module('locations', function(mod, sandbox) {
	mod.initMap = function (holder, mapCenter) {
		var center = mapCenter || [49.8622, 23.9171];

		var mapOptions = {
			disableDefaultUI: true,
			zoom: 16,
			center: new google.maps.LatLng(center[0], center[1]),
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};
		var map = new google.maps.Map(holder, mapOptions);

		google.maps.event.addListener(map, 'click', function(event) {
			mod.trigger('map:position:selected', event.latLng.ob, event.latLng.pb);
			// console.log(event.latLng.ob, event.latLng.pb);
		});

		mod.map = map;
	};

	function addPoint(lat, lon) {
		var myLatLng = new google.maps.LatLng(lat, lon);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: mod.map,
			title: '',
			icon: '/images/target.png'
		});
	}

	// mock
	mod.on('map:position:selected', function(lat, lon) {
		addPoint(lat, lon);
	});

});
