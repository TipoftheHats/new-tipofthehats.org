/**
 * @customElement
 * @polymer
 * @extends Polymer.Element
 */
class TothStaff extends Polymer.Element {
	static get is() {
		return 'toth-staff';
	}

	static get properties() {
		return {
			name: String,
			role: String,
			handle: String,
			picture: String,
			email: String,
			twitter: String,
			youtube: String,
			website: String
		};
	}

	calcImgSrc(handle) {
		return `/img/portraits/${handle.toLowerCase()}.jpg`;
	}
}

customElements.define(TothStaff.is, TothStaff);
