(function () {
	'use strict';

	Polymer({
		is: 'toth-donate-total',

		ready() {
			// Update the total every minute.
			setInterval(() => {
				this.$.totalAjax.generateRequest();
			}, 60 * 1000);
		}
	});
})();
