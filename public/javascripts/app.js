/*globals dhtmlXLayoutObject, core, sandbox_extension */

var sandbox_extension = sandbox_extension || {};
var app = new core.Application(sandbox_extension);

function initTabbar() {
	var tabbar = new dhtmlXTabBar(document.body, "top");
	tabbar.addTab("users","Users","100px");
	tabbar.addTab("quests","Quests","100px");
	return tabbar;
}

// function initLayout() {
// 	var layout = new dhtmlXLayoutObject(document.body, "3J");
// 	layout.cells("a").setText("Tree");
// 	layout.cells("c").setText("Details");
// 	layout.cells("b").setText("Map");
// 	layout.cells("a").setWidth(500);
// 	return layout;
// }


app.addInitializer(function (options) {
	var tabbar = initTabbar();
	core.extend(options, {
		users: {
			holder: tabbar.cells('users')
		}
	});

	app.tabbar = tabbar;
});


dhtmlx.image_path = "../stylesheets/imgs/";

$(function() {
	app.start({});
});
