app.module('users', function(mod, sandbox) {

	mod.Users = {
		read: function () {
			sandbox.get('/users/')
				.done(function (data) {
					sandbox.trigger('users:readed', data);
				});
		}
	};


});
