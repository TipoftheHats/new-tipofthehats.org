/**
 * @customElement
 * @polymer
 */
class TothDonateTotal extends Polymer.Element {
	static get is() {
		return 'toth-donate-total';
	}

	static get properties() {
		return {
			/**
			 * The tracker eventId to pull donation totals for.
			 */
			eventId: {
				type: Number,
				value: 5,
				readOnly: true
			}
		};
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
