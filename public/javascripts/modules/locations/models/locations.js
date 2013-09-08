app.module('locations', function(mod, sandbox) {

	mod.Users = {
		read: function () {
			sandbox.get('/locations/')
				.done(function (data) {
					mod.trigger('locations:readed', data);
				});
		}
	};


});
