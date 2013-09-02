app.module('toolbar', function(mod, sandbox) {
	function initToolbar(holder) {
		var toolbar = holder.attachToolbar();

		toolbar.addButton('npc', 1, 'NPC', null, null);

		toolbar.addButton('group', 2, 'Группировки', null, null);

		toolbar.addButton('users', 3, 'Игроки', null, null);

		toolbar.addButton('items', 4, 'Элементы', null, null);

		toolbar.addButton('levels', 5, 'Уровни', null, null);

		toolbar.addButton('quests', 6, 'Задания', null, null);

		toolbar.attachEvent("onclick", function (id) {
			sandbox.trigger('show:info', id);
		});
		return toolbar;
	}

	mod.addInitializer(function (opt) {
		mod.toolbar = initToolbar(opt.toolbar.holder);
	});
});

