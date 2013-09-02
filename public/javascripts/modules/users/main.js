app.module('users', function(mod, sandbox) {
	function initGrid(holder) {
		var grid = holder.attachGrid();
		grid.setHeader("Name,Phone");
		grid.attachHeader("#text_filter,#text_filter");
		grid.setInitWidths("100,*");
		grid.setColAlign("left,left");
		grid.setColTypes("ro,ro,ro");
		grid.setColSorting("str,str");
		grid.setColumnIds("name,phone");
		grid.init();
		return grid;
	}

	mod.addInitializer(function (opt) {
		mod.contacts = initGrid(opt.users.holder);
		mod.contacts.load('/users', 'js');
	});
});
