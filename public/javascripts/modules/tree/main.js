app.module('tree', function(mod, sandbox) {
	function initTree(holder) {
		var tree = holder.attachTree();
		return tree;
	}

	mod.addInitializer(function (opt) {
		var tree = initTree(opt.tree.holder);
		tree.loadJSArray([
			["1","0","node 1"],
			["2","1","node 1.1"],
			["3","2","node 1.1.1"],
			["4","0","node 2"]
		]);
		mod.tree = tree;
	});
});

