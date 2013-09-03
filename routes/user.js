
var users = [{
		id: 1,
		"name": "Вася",
		"phone": "1114124"
	}, {
		id: 2,
		"name": "Иван",
		"phone": "1114123"
	}
];
var next_id = 3;

function getUserById(id) {
	var key = +id;
	var l = users.length;
	for (var i=0; i<l; i++) {
		if(users[i].id === key) {
			return users[i];
		}
	}
}

function delUserById(id) {
	var key = +id;
	var l = users.length;
	for (var i=0; i<l; i++) {
		if (users[i].id === key) {
			users.splice(i, 1);
			return;
		}
	}
}

exports.list = function(req, res){
	var data = {
		"total_count":users.length,
		"pos":0,
		"data": users
	};
	res.send(data);
};

exports.show = function(req, res){
	var user = getUserById(req.params.id);
	res.send(user);
};

exports.update = function(req, res){
	var user = getUserById(req.params.id);
	var update = req.body;
	if(user) {
		user.name = update.name;
		user.phone = update.phone;
	}

	res.send(user);
};

exports.del = function(req, res){
	delUserById(req.params.id);
	res.send({});
};

exports.create = function(req, res){
	var update = req.body;

	var user = {
		id: next_id,
		name: update.name,
		phone: update.phone
	};

	next_id++;

	users.push(user);

	res.send(user);
};

