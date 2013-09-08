
var locations = [{
		id: 1,
		lat: 100000,
		lon: 111111,
		description: "test location"
	}
];

var next_id = 2;

function getLocationById(id) {
	var key = +id;
	var l = locations.length;
	for (var i=0; i<l; i++) {
		if(locations[i].id === key) {
			return locations[i];
		}
	}
}

function delLocationById(id) {
	var key = +id;
	var l = locations.length;
	for (var i=0; i<l; i++) {
		if (locations[i].id === key) {
			locations.splice(i, 1);
			return;
		}
	}
}

exports.list = function(req, res){
	var data = {
		"total_count":locations.length,
		"pos":0,
		"data": locations
	};
	res.send(data);
};

exports.show = function(req, res){
	var location = getLocationById(req.params.id);
	res.send(location);
};

exports.update = function(req, res){
	var location = getLocationById(req.params.id);
	var update = req.body;
	if(location) {
		location.lat = update.lat;
		location.lon = update.lon;
		location.description = update.description;
	}

	res.send(location);
};

exports.del = function(req, res){
	delLocationById(req.params.id);
	res.send({});
};

exports.create = function(req, res){
	var update = req.body;

	var location = {
		id: next_id,
		lat: update.lat,
		lon: update.lon,
		description: update.description
	};

	next_id++;

	locations.push(location);

	res.send(location);
};

