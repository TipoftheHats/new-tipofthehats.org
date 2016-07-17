(function () {
	'use strict';

	Polymer({
		is: 'toth-talent',

		properties: {
			name: String
		},

		calcImgSrc(handle) {
			return `/img/portraits/${handle.toLowerCase()}.jpg`;
		}
	});
})();

