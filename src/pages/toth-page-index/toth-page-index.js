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
					name: 'Whisker'
				}, {
					name: 'seanbud'
				}, {
					name: 'Admirable'
				}, {
					name: 'Krunkidile'
				}, {
					name: 'uberchain'
				}, {
					name: 'mala'
				}, {
					name: 'ma3la'
				}, {
					name: 'cbear'
				}, {
					name: 'Getawhale'
				}, {
					name: 'slin'
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

			e.target.closest('iron-accordion')._originalOnHeaderTap(e);
		}
	});
})();
