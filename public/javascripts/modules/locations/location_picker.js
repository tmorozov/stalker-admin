app.module('locations', function(mod, sandbox) {
	mod.initMap = function (holder) {
		var center = [49.8622, 23.9171];
		var points = [];

		var mapOptions = {
			disableDefaultUI: true,
			zoom: 16,
			center: new google.maps.LatLng(center[0], center[1]),
			mapTypeId: google.maps.MapTypeId.SATELLITE
		};
		var map = new google.maps.Map(holder, mapOptions);

		var image = '/images/target.png';

		for (var i=points.length-1; i>=0; i--) {
			var point = points[i];
			var myLatLng = new google.maps.LatLng(point[1], point[2]);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: point[0],
				icon: '/images/'+point[3]+'.png'
			});
		}

		google.maps.event.addListener(map, 'click', function(event) {
			console.log(event.latLng.ob, event.latLng.pb);
		});

		mod.map = map;
	}

});
