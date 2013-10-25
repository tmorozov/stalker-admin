app.module('locations', function(mod, sandbox) {

  mod.initGrid = function (holder) {
    var grid = holder.attachGrid();
    grid.setHeader("Description,Lat,Lon");
    grid.setColTypes("ed,ro,ro");
    grid.setColumnIds("description,lat,lon");
    grid.init();

    grid.attachEvent("onEditCell",onEditCell);
    grid.attachEvent("onCheck", onCheck);
    grid.attachEvent("onRowSelect", onRowSelect);

    return grid;
  };

  function onEditCell(stage, rowId, cellIndex, newValue, oldValue) {
    if ( stage ===2 && newValue !== oldValue) {
      updateModel(rowId);
      return true;
    }

    return true;
  }

  function onCheck(rowId, cellIndex, state) {
    updateModel(rowId);
  }

  function getDataFromRow(id) {
    var grid = mod.locations;
    var data = {
      id: id,
      description: grid.cells(id,0).getValue(),
      lat: grid.cells(id,1).getValue(),
      lon: grid.cells(id,2).getValue(),
    };

    return data;
  }

  function setDataInRow(data) {
    var grid = mod.locations;
    var id = data.id;
    grid.cells(id,0).setValue(data.description);
    grid.cells(id,1).setValue(data.lat);
    grid.cells(id,2).setValue(data.lon);
  }

  function updateModel(id) {
    var data = getDataFromRow(id);
    mod.Location.update(data);
  }

  function onRowSelect (id, ind) {
    mod.trigger('location:selected', id);
  }

  mod.on('locations:readed', function (data) {
    mod.locations.parse(data, "js");
  });

  mod.on('location:deleted', function (id) {
    mod.locations.deleteRow(id);
  });

  mod.on('location:updated', function (data) {
    setDataInRow(data);
  });

  mod.on('location:created', function (data) {
    mod.locations.addRow(data.id, '', null);
    setDataInRow(data);
  });

  mod.on('export:locations', function () {
    var grid = mod.locations;
    var expData = [];
    grid.forEachRow(function(id){
      expData.push({
        name: grid.cells(id,0).getValue(),
        location: [+grid.cells(id,1).getValue(), +grid.cells(id,2).getValue()],
        type: 'target'
      });
    });
    console.log(JSON.stringify(expData, null, "  "));
  });

});
