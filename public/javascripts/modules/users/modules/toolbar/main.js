app.module('users').module('toolbar', function(mod, sandbox) {
	function initToolbar(holder) {
		var toolbar = holder.attachToolbar();
		toolbar.addButton('add', 1, 'Add', null, null);
		toolbar.addButton('del', 2, 'Del', null, null);

		toolbar.attachEvent("onclick", function (id) {
			console.log('users.toolbar', id);
		});
		return toolbar;
	}

	mod.addInitializer(function (opt) {
		mod.toolbar = initToolbar(opt.users.toolbar.holder);
	});
});
