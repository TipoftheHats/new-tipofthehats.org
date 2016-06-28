(function () {
	'use strict';

	Polymer({
		is: 'toth-event',

		properties: {
			name: String,
			label: String,
			info: String
		},

		toggle: function() {
			this.$.collapse.toggle();
		}
	});
})();

