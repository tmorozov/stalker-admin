app.module('users').module('new_user', function(mod, sandbox) {
	mod.initForm = function (holder) {
		var formData = [ {
			type: "fieldset",
			name: "data",
			label: "User",
			inputWidth: "auto",
			list:[ {
					type: "checkbox", 
					name: "active", 
					label: 'Active', 
					checked: true
				}, {
					type:"label",
					label:"Name"
				}, {
					type:"input",
					name:"name",
				}, {
					type:"label",
					label:'Phone'
				},{
					type:"input",
					name: 'phone',
				},{
					type:"button",
					name:"create",
					value:"Create"
				}
			]
		}];

		var form = holder.attachForm(formData);
		return form;
	}
});
