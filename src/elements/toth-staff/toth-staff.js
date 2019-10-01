(function () {
	/**
	 * @customElement
	 * @polymer
	 */
	class TothStaff extends Polymer.Element {
		static get is() {
			return 'toth-staff';
		}

		static get properties() {
			return {
				name: String,
				roles: Array,
				handle: String,
				picture: String,
				email: String,
				twitter: String,
				youtube: String,
				website: String
			};
		}

		calcImgSrc(handle) {
			return `/images/portraits/${handle.toLowerCase()}.jpg`;
		}
	}

	customElements.define(TothStaff.is, TothStaff);
})();
