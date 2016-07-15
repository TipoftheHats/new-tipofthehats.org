(function () {
	'use strict';

	Polymer({
		is: 'toth-staff',

		properties: {
			name: String,
			role: String,
			handle: String,
			picture: String,
			email: String,
			twitter: String,
			youtube: String,
			website: String
		},

		calcImageSrc(handle) {
			return `/img/portraits/${handle.toLowerCase()}.jpg`;
		}
	});
})();
