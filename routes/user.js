var data  = {
	"total_count":2, 
	"pos":0, 
	"data":[{ 
			"name": "Вася",
			"phone": "1114124",
		}, { 
			"name": "Иван",
			"phone": "1114123",
		}
	]
};

exports.list = function(req, res){
	res.send(data);
};