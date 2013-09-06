app.module('users', function(mod, sandbox) {
	function initLayout(holder) {
		var layout = new dhtmlXLayoutObject(holder, "2U");
		layout.cells("a").setText("Users");
		layout.cells("b").setText("Details");
		layout.cells("a").setWidth(500);
		return layout;
	}

	mod.addInitializer(function (opt) {
		var layout = initLayout(opt.users.holder);
		core.extend(opt.users, {
			toolbar: {
				holder: layout.cells('a')
			},
			list: {
				holder: layout.cells('a')
			},
			popups: {
				holder: layout
			}
		});

		mod.layout = layout;
	});
});
