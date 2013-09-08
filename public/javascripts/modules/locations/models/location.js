app.module('locations', function(mod, sandbox) {

	mod.User = {
		create: function (data) {
			sandbox.post('/locations/', data)
				.done(function (data) {
					mod.trigger('locations:created', data);
			});
		},

		del: function (id) {
			if (!id) {
				return;
			}

			sandbox.del('/locations/'+id)
				.done(function (data) {
					mod.trigger('locations:deleted', id);
				});
		},

		update: function (data) {
			sandbox.put('/locations/'+data.id, data)
				.done(function (data) {
					mod.trigger('locations:updated', data);
				});
		}
	};
});
