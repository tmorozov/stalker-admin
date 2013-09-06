app.module('users', function(mod, sandbox) {

	sandbox.on('users:read', function () {
		sandbox.get('/users/')
			.done(function (data) {
				sandbox.trigger('users:readed', data);
			});
	});

	// sandbox.on('user:create', function (data) {
	// 	sandbox.post('/users/', data)
	// 		.done(function (data) {
	// 			sandbox.trigger('user:created', data);
	// 		});
	// });

	// sandbox.on('user:delete', function (id) {
	// 	if (!id) {
	// 		return;
	// 	}

	// 	sandbox.del('/users/'+id)
	// 		.done(function (data) {
	// 			sandbox.trigger('user:deleted', id);
	// 		});
	// });

	// sandbox.on('user:update', function (data) {
	// 	sandbox.put('/users/'+data.id, data)
	// 		.done(function (data) {
	// 			sandbox.trigger('user:updated', data);
	// 		});
	// });

});
