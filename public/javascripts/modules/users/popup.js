app.module('users', function(mod, sandbox) {

	mod.popup = false;

	function closeWindow () {
		mod.popup = false;
		return true;
	}

	function createPopup(id, size, title) {
		var winCreator = mod.winCreator;

		var popup = winCreator.createWindow(id, size.tx, size.ty, size.w, size.h);
		popup.center();
		popup.setText(title);
		winCreator.window(id).attachEvent("onClose", closeWindow);

		return popup;
	}

	function onFormSubmit(name, command) {
		var data = mod.form.getFormData();
		mod.User.create(data);
	}

	mod.on('user:created', function () {
		mod.popup.close();
	});

	mod.on('user:new', function () {
		if ( mod.popup ) {
			return;
		}

		var id = "newuser_win";
		var size = {
			tx: 0,
			ty: 0,
			w: 240,
			h: 300
		};
		var popup = createPopup(id, size, "New User");
		var form = mod.initForm(popup);

		form.attachEvent("onButtonClick", onFormSubmit);

		mod.popup = popup;
		mod.form = form;
	});

});
