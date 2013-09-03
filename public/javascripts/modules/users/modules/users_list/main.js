app.module('users').module('list', function(mod, sandbox) {
	function initGrid(holder) {
		var grid = holder.attachGrid();
		grid.setHeader("Active,Name,Phone");
		grid.attachHeader(",#text_filter,#text_filter");
		grid.setInitWidths("50,100,*");
		grid.setColAlign("center,left,left");
		grid.setColTypes("ch,ed,ed");
		grid.setColSorting("na,str,str");
		grid.setColumnIds("active,name,phone");
		grid.init();
		return grid;
	}

	function onEditCell(stage, rowId, cellIndex, newValue, oldValue) {
		if ( stage ===2 && newValue !== oldValue) {
			console.log(rowId,cellIndex,newValue,oldValue);
			return true;
		}

		return true;
	}

	function onCheck(rowId, cellIndex, state) {
		console.log("row:"+rowId, "state:" , state);
	}

	sandbox.on('users:readed', function (data) {
		mod.users.parse(data, "js");
	});

	mod.addInitializer(function (opt) {
		var users = initGrid(opt.users.list.holder);
		sandbox.trigger('users:read');
		users.attachEvent("onEditCell",onEditCell);
		users.attachEvent("onCheck", onCheck);
		mod.users = users;
	});
});
