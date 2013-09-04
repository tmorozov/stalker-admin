app.module('users').module('toolbar', function(mod, sandbox) {

	function initToolbar(holder) {
		var toolbar = holder.attachToolbar();
		toolbar.addButton('add', 1, 'Add', null, null);
		toolbar.addButton('del', 2, 'Del', null, null);

		toolbar.attachEvent("onclick", function (id) {
			if (id === 'add') {
				sandbox.trigger('user:new');
			} else if (id === 'del' && mod.selectedUserId ) {
				sandbox.trigger('user:delete', mod.selectedUserId);
			}
		});
		return toolbar;
	}

	sandbox.on('user:selected', function (id) {
		mod.selectedUserId = id;
	});

	sandbox.on('user:deleted', function (id) {
		mod.selectedUserId = null;
	});

	mod.addInitializer(function (opt) {
		mod.toolbar = initToolbar(opt.users.toolbar.holder);
		mod.selectedUserId = null;
	});
});
