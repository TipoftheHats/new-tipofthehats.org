(function () {
	'use strict';

	Polymer({
		is: 'toth-page-index',

		properties: {
			talent: {
				type: Array,
				readOnly: true,
				value: [{
					name: 'Lange'
				}, {
					name: 'tagg'
				}, {
					name: 'truktruk'
				}, {
					name: 'ma3la'
				}, {
					name: 'Krunkidile'
				}, {
					name: 'mala'
				}, {
					name: 'Getawhale'
				}, {
					name: 'uberchain'
				}, {
					name: 'Sideshow'
				}, {
					name: 'Whisker'
				}, {
					name: 'cbear'
				}, {
					name: 'seanbud'
				}, {
					name: 'slin'
				}, {
					name: 'Admirable'
				}, {
					name: 'and more!'
				}]
			}
		},

		attached() {
			// Attach our custom header tap override to each iron-accordion.
			const accordions = Polymer.dom(this.root).querySelectorAll('iron-accordion');
			accordions.forEach(accordion => {
				accordion._originalOnHeaderTap = accordion._onHeaderTap;
				accordion._onHeaderTap = this.accordionHeaderTapOverride.bind(this);
			});
		},

		/**
		 * A custom override to prevent accordions from being collapsible on the narrow layout.
		 * @param e
		 */
		accordionHeaderTapOverride(e) {
			if (!this.wideLayout) {
				return;
			}

			e.target.parentNode.parentNode._originalOnHeaderTap(e);
		}
	});
})();
