app.module('locations', function(mod, sandbox) {
	var markers = {};

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
			mod.Location.create({
				description: 'new location',
				lat: event.latLng.ob, 
				lon: event.latLng.pb
			});
		});

		mod.map = map;
	};

	function addPoint(data) {
		var myLatLng = new google.maps.LatLng(data.lat, data.lon);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: mod.map,
			title: data.description,
			icon: '/images/target.png'
		});

		return marker;
	}

	mod.on('location:created', function(data) {
		markers[data.id] = addPoint(data);
	});

	mod.on('location:deleted', function(id) {
		if (!markers[id]) {
			return;
		}

		markers[id].setMap(null);
		delete markers[id];
	});

	mod.on('locations:readed', function (data) {
		var points = data.data;
		var l = points.length;
		for (var i=0; i<l; i++) {
			markers[points[i].id] = addPoint(points[i]);
		}
	});
});
