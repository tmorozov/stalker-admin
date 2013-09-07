app.module('locations', function(mod, sandbox) {
	function initLayout(holder) {
		var layout = new dhtmlXLayoutObject(holder, "2U");
		layout.cells("a").setText("Locations");
		layout.cells("b").setText("Map");
		layout.cells("a").setWidth(500);
		return layout;
	}

	mod.addInitializer(function (opt) {
		mod.layout = initLayout(opt.locations.holder);
	});
});
