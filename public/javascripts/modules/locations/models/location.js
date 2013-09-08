app.module('locations', function(mod, sandbox) {

	mod.Location = {
		create: function (data) {
			sandbox.post('/locations/', data)
				.done(function (data) {
					mod.trigger('location:created', data);
			});
		},

		del: function (id) {
			if (!id) {
				return;
			}

			sandbox.del('/locations/'+id)
				.done(function (data) {
					mod.trigger('location:deleted', id);
				});
		},

		update: function (data) {
			sandbox.put('/locations/'+data.id, data)
				.done(function (data) {
					mod.trigger('location:updated', data);
				});
		}
	};
});
