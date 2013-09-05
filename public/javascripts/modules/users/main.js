app.module('users', function(mod, sandbox) {
	function initLayout(holder) {
		var layout = holder.attachLayout("2U");
		layout.cells("a").setText("Users");
		layout.cells("b").setText("Details");
		layout.cells("a").setWidth(500);

		return layout;
	}

	mod.addInitializer(function (opt) {
		mod.layout = initLayout(opt.users.holder);
		mod.toolbar = mod.initToolbar(mod.layout.cells('a'));
		mod.winCreator = mod.layout.dhxWins;

		mod.users = mod.initGrid(mod.layout.cells('a'));
		mod.Users.read();
	});
});
