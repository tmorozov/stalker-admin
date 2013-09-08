/*globals dhtmlXLayoutObject, core, sandbox_extension */

var sandbox_extension = sandbox_extension || {};
var app = new core.Application(sandbox_extension);

function initTabbar() {
	var tabbar = new dhtmlXTabBar(document.body, "top");
	tabbar.addTab("users","Users","100px");
	tabbar.addTab("locations","Locations","100px");
	tabbar.addTab("quests","Quests","100px");
	return tabbar;
}


app.addInitializer(function (options) {
	var tabbar = initTabbar();
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
