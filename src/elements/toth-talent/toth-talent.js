/**
 * @customElement
 * @polymer
 * @extends Polymer.Element
 */
class TothTalent extends Polymer.Element {
	static get is() {
		return 'toth-talent';
	}

	static get properties() {
		return {
			name: String
		};
	}

	calcImgSrc(handle) {
		return `/img/portraits/${handle.toLowerCase()}.jpg`;
	}
}

customElements.define(TothTalent.is, TothTalent);
