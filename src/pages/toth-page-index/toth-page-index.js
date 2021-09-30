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
						name: 'Clockwork'
					}, {
						name: 'Josh'
					}, {
						name: 'Bren'
					}, {
						name: 'harsha'
					}, {
						name: 'tagg'
					}, {
						name: 'Wyatt'
					}, {
						name: 'Kurt'
					}, {
						name: 'Ster'
					}, {
						name: 'Fender'
					}, {
						name: 'Jas'
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
