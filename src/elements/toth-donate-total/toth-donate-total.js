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
				value: 7,
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

	_formatTotal(amount) {
		const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
		if (isNaN(amount)) {
			return;
		}
		return parsedAmount.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0,
			minimumFractionDigits: 0
		});
	}
}

customElements.define(TothDonateTotal.is, TothDonateTotal);
