(function () {
	'use strict';

	/**
	 * @customElement
	 * @polymer
	 * @extends Polymer.Element
	 */
	class TothSplash extends Polymer.Element {
		static get is() {
			return 'toth-splash';
		}

		ready() {
			super.ready();

			if (window.Twitch) {
				new window.Twitch.Embed(this.$['splash-content-stream'], { // eslint-disable-line no-new
					width: '100%',
					height: '100%',
					channel: 'tipofthehats',
					layout: 'video',
					theme: 'dark'
				});
			}
		}
	}

	customElements.define(TothSplash.is, TothSplash);
})();
