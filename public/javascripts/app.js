/*globals dhtmlXLayoutObject, core, sandbox_extension */

var sandbox_extension = sandbox_extension || {};
var app = new core.Application(sandbox_extension);

function initLayout(holder) {
	var layout = new dhtmlXLayoutObject(holder, "1C");
	return layout;
}

function initTabbar(holder) {
	var tabbar = holder.attachTabbar("top");
	tabbar.addTab("users","Users","*");
	tabbar.addTab("locations","Locations","*");
	tabbar.addTab("quests","Quests","*");
	return tabbar;
}


app.addInitializer(function (options) {
	var layout = initLayout(document.body);
	var tabbar = initTabbar(layout.cells('a'));

	core.extend(options, {
		users: {
			holder: tabbar.cells('users')
		},
		locations: {
			holder: tabbar.cells('locations')
		}
	});

	app.tabbar = tabbar;
});


dhtmlx.image_path = "../stylesheets/imgs/";

$(function() {
	app.start({});
});
