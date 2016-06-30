(function () {
	'use strict';

	Polymer({
		is: 'toth-site',

		properties: {
			wideLayout: {
				type: Boolean,
				value: false,
				observer: 'onLayoutChange'
			}
		}
	});
})();
