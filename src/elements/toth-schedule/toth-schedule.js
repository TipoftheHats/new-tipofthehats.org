/**
 * @customElement
 * @polymer
 */
class TothSchedule extends Polymer.Element {
	static get is() {
		return 'toth-schedule';
	}

	static get properties() {
		return {
			selected: {
				type: Number,
				value: 0
			}
		};
	}

	_equal(a, b) {
		return a === b;
	}
}

customElements.define(TothSchedule.is, TothSchedule);
