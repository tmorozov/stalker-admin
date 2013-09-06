app.module('users', function(mod, sandbox) {

	sandbox.on('users:read', function () {
		sandbox.get('/users/')
			.done(function (data) {
				sandbox.trigger('users:readed', data);
			});
	});

});
