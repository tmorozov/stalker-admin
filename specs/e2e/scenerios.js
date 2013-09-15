describe('Layout', function() {
	beforeEach(function() {
		browser().navigateTo('/');
	});

	it('show 3 tabs', function() {
		expect(element('.dhx_tab_element').count()).toEqual(3);
	});

	it('show User tab', function() {
		expect(element('.dhx_tab_element:nth-child(1)').text())
			.toEqual('Users');
	});

	it('show User tab', function() {
		expect(element('.dhx_tab_element:nth-child(2)').text())
			.toEqual('Locations');
	});

	it('show User tab', function() {
		expect(element('.dhx_tab_element:nth-child(3)').text())
			.toEqual('Quests');
	});
});