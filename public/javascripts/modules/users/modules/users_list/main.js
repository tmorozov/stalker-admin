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
			updateUser(rowId);
			return true;
		}

		return true;
	}

	function onCheck(rowId, cellIndex, state) {
		console.log("row:"+rowId, "state:" , state);
		updateUser(rowId);
	}

	function loadFromGrid(id) {
		var grid = mod.users;
		var data = {
			id: id,
			"active": grid.cells(id,0).getValue(),
			"name": grid.cells(id,1).getValue(),
			"phone": grid.cells(id,2).getValue()
		};

		return data;
	}

	function setToGrid(data) {
		var grid = mod.users;
		var id = data.id;
		grid.cells(id,0).setValue(data.active);
		grid.cells(id,1).getValue(data.name);
		grid.cells(id,2).getValue(data.phone);
	}

	function updateUser(id) {
		var data = loadFromGrid(id);
		sandbox.trigger('user:update', data);
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

	sandbox.on('user:updated', function (data) {
		setToGrid(data);
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
