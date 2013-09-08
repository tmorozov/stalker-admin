app.module('locations', function(mod, sandbox) {

	mod.Locations = {
		read: function () {
			sandbox.get('/locations/')
				.done(function (data) {
					mod.trigger('locations:readed', data);
				});
		}
	};


});
