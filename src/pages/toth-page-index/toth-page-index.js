(function () {
	/**
	 * @customElement
	 * @polymer
	 */
	class TothPageIndex extends Polymer.Element {
		static get is() {
			return 'toth-page-index';
		}

		static get properties() {
			return {
				events: Array,
				wideLayout: Boolean,
				talent: {
					type: Array,
					readOnly: true,
					value: [{
						name: 'Seagull'
					}, {
						name: 'ster'
					}, {
						name: 'Sideshow'
					}, {
						name: 'Bren'
					}, {
						name: 'clockwork'
					}, {
						name: 'Muma'
					}, {
						name: 'harsha'
					}, {
						name: 'tagg'
					}, {
						name: 'Ma3la'
					}, {
						name: 'truktruk'
					}, {
						name: 'raysfire'
					}, {
						name: 'Getawhale'
					}, {
						name: 'Bloodsire'
					}, {
						name: 'Lange'
					}, {
						name: 'mala'
					}, {
						name: 'Admirable'
					}, {
						name: 'Krunkidile'
					}, {
						name: 'seanbud'
					}, {
						name: 'Auzzie'
					}, {
						name: 'Whisker'
					}, {
						name: 'erynn'
					}, {
						name: 'Jasbutts'
					}, {
						name: 'loris'
					}, {
						name: 'Mark'
					}, {
						name: 'stevebud'
					}, {
						name: 'justinkim'
					}, {
						name: 'uberchain'
					}, {
						name: 'Geel'
					}, {
						name: 'Jessecar'
					}]
				}
			};
		}

		attached() {
			// Attach our custom header tap override to each iron-accordion.
			const accordions = Polymer.dom(this.root).querySelectorAll('iron-accordion');
			accordions.forEach(accordion => {
				accordion._originalOnHeaderTap = accordion._onHeaderTap;
				accordion._onHeaderTap = this.accordionHeaderTapOverride.bind(this);
			});
		}

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
	}

	customElements.define(TothPageIndex.is, TothPageIndex);
})();
