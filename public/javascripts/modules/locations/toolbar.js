app.module('locations', function(mod, sandbox) {

	mod.selectedLocationId = null;

	mod.initToolbar = function (holder) {
		var toolbar = holder.attachToolbar();
		toolbar.addButton('add', 1, 'Add', null, null);
		toolbar.addButton('del', 2, 'Del', null, null);

		toolbar.attachEvent("onclick", function (id) {
			if (id === 'add') {
				// mod.trigger('location:new');

				// temporarily - mock functionality
				mod.Location.create({
					description: 'new location',
					lat: 1,
					lon: 1
				});

			} else if (id === 'del' && mod.selectedLocationId ) {
				mod.Location.del(mod.selectedLocationId);
			}
		});
		return toolbar;
	};

	mod.on('location:selected', function (id) {
		mod.selectedLocationId = id;
	});

	mod.on('location:deleted', function (id) {
		mod.selectedLocationId = null;
	});
});
