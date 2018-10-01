/**
 * @customElement
 * @polymer
 * @extends Polymer.Element
 */
class TothSite extends Polymer.Element {
	static get is() {
		return 'toth-site';
	}

	static get properties() {
		return {
			pageData: Object,
			pageTail: String
		};
	}

	routeChanged() {
		window.scrollTo(0, 0);
	}
}

customElements.define(TothSite.is, TothSite);
