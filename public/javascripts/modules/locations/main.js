app.module('locations', function(mod, sandbox) {
	function initLayout(holder) {
		var layout = holder.attachLayout("2U");
		layout.cells("a").setText("Locations");
		layout.cells("b").setText("Map");
		layout.cells("a").setWidth(500);
		return layout;
	}

	mod.addInitializer(function (opt) {
		mod.layout = initLayout(opt.locations.holder);

		mod.toolbar = mod.initToolbar(mod.layout.cells('a'));
		mod.locations = mod.initGrid(mod.layout.cells('a'));
		mod.Locations.read();

		mod.initMap(mod.layout.cells('b'));
		mod.initImg().setMap(mod.map);
	});
});
