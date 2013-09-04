app.module('users').module('list', function(mod, sandbox) {
	var mod = this;

	function initGrid(holder) {
		var grid = holder.attachGrid();
		grid.setHeader("Active,Name,Phone");
		// grid.attachHeader(",#text_filter,#text_filter");
		// grid.setInitWidths("50,100,*");
		// grid.setColAlign("center,left,left");
		grid.setColTypes("ch,ed,ed");
		// grid.setColSorting("na,str,str");
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

	function onRowSelect (id, ind) {
		sandbox.trigger('user:selected', id);
	}

	sandbox.on('users:readed', function (data) {
		mod.users.parse(data, "js");
	});

	sandbox.on('user:deleted', function (id) {
		mod.users.deleteRow(id);
	});

	mod.addInitializer(function (opt) {
		var users = initGrid(opt.users.list.holder);
		sandbox.trigger('users:read');
		users.attachEvent("onEditCell",onEditCell);
		users.attachEvent("onCheck", onCheck);
		users.attachEvent("onRowSelect", onRowSelect);
		mod.users = users;
	});
});
