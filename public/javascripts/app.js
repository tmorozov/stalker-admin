/*globals dhtmlXLayoutObject, core, sandbox_extension */

var sandbox_extension = sandbox_extension || {};
var app = new core.Application(sandbox_extension);

function initLayout() {
	var layout = new dhtmlXLayoutObject(document.body, "3J");
	layout.cells("a").setText("Tree");
	layout.cells("c").setText("Details");
	layout.cells("b").setText("Map");
	layout.cells("a").setWidth(500);
	return layout;
}

app.sandbox.on('show:info', function (id) {
	// app.layout.cells("a").view(id).setActive();
});

app.addInitializer(function (options) {
	app.layout = initLayout();

	// app.layout.cells("a").view("npc");
	// app.layout.cells("a").view("group");
	// app.layout.cells("a").view("users");
	// app.layout.cells("a").view("items");
	// app.layout.cells("a").view("levels");
	// app.layout.cells("a").view("quests");

	core.extend(options, {
		toolbar: {
			holder: app.layout
		},
		tree: {
			holder: app.layout.cells("a")
		},
		details: {
			holder: app.layout.cells("c")
		},
		map: {
			holder: app.layout.cells("b")
		},
		popups: {
			holder: app.layout
		}
	});
});


dhtmlx.image_path = "../stylesheets/imgs/";

$(function() {
	app.start({});
});
