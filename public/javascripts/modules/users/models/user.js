app.module('users', function(mod, sandbox) {

	mod.User = {
		create: function (data) {
			sandbox.post('/users/', data)
				.done(function (data) {
					sandbox.trigger('user:created', data);
			});
		},

		del: function (id) {
			if (!id) {
				return;
			}

			sandbox.del('/users/'+id)
				.done(function (data) {
					sandbox.trigger('user:deleted', id);
				});
		},

		update: function (data) {
			sandbox.put('/users/'+data.id, data)
				.done(function (data) {
					sandbox.trigger('user:updated', data);
				});
		}
	};


});
