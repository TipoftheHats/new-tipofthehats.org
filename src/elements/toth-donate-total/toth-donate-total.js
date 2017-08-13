/**
 * @customElement
 * @polymer
 * @extends Polymer.Element
 */
class TothDonateTotal extends Polymer.Element {
	static get is() {
		return 'toth-donate-total';
	}

	ready() {
		super.ready();

		// Update the total every minute.
		setInterval(() => {
			this.$.totalAjax.generateRequest();
		}, 60 * 1000);
	}
}

customElements.define(TothDonateTotal.is, TothDonateTotal);
