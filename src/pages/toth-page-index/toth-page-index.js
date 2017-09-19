/**
 * @customElement
 * @polymer
 * @extends Polymer.Element
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
					name: 'Whisker'
				}, {
					name: 'truktruk'
				}, {
					name: 'Lange'
				}, {
					name: 'Krunkidile'
				}, {
					name: 'dashner'
				}, {
					name: 'Jasbutts'
				}, {
					name: 'Ma3la'
				}, {
					name: 'mala'
				}, {
					name: 'uberchain'
				}, {
					name: 'Mark'
				}, {
					name: 'Geel'
				}, {
					name: 'mathsad'
				}, {
					name: 'samiface'
				}, {
					name: 'erynn'
				}, {
					name: 'loris'
				}, {
					name: 'tagg'
				}, {
					name: 'Uncle Dane'
				}, {
					name: 'Sideshow'
				}, {
					name: 'Getawhale'
				}, {
					name: 'harsha'
				}, {
					name: 'ScottJAw'
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
