app.module('users', function(mod, sandbox) {

	mod.initGrid = function (holder) {
		var grid = holder.attachGrid();
		grid.setHeader("Active,Name,Phone");
		// grid.attachHeader(",#text_filter,#text_filter");
		// grid.setInitWidths("50,100,*");
		// grid.setColAlign("center,left,left");
		grid.setColTypes("ch,ed,ed");
		// grid.setColSorting("na,str,str");
		grid.setColumnIds("active,name,phone");
		grid.init();

		grid.attachEvent("onEditCell",onEditCell);
		grid.attachEvent("onCheck", onCheck);
		grid.attachEvent("onRowSelect", onRowSelect);

		return grid;
	};

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

	function getDataInRow(id) {
		var grid = mod.users;
		var data = {
			id: id,
			"active": grid.cells(id,0).getValue(),
			"name": grid.cells(id,1).getValue(),
			"phone": grid.cells(id,2).getValue()
		};

		return data;
	}

	function setDataInRow(data) {

		var grid = mod.users;
		var id = data.id;
		grid.cells(id,0).setValue(data.active);
		grid.cells(id,1).setValue(data.name);
		grid.cells(id,2).setValue(data.phone);
	}

	function updateUser(id) {
		var data = getDataInRow(id);
		mod.User.update(data);
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
		setDataInRow(data);
	});

	sandbox.on('user:created', function (data) {
		mod.users.addRow(data.id, '', null);
		setDataInRow(data);		
	});

});
