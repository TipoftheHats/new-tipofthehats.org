/**
 * @customElement
 * @polymer
 * @extends Polymer.Element
 */
class TothPageAbout extends Polymer.Element {
	static get is() {
		return 'toth-page-about';
	}

	static get properties() {
		return {
			selected: {
				type: Number,
				value: 0
			},
			staff: {
				type: Array,
				readOnly: true,
				value: [{
					name: 'Alex Van Camp',
					handle: 'Lange',
					role: 'Executive Producer',
					website: 'http://alexvan.camp',
					email: 'lange@tipofthehats.org',
					twitter: 'vancamp'
				}, {
					name: 'Sean Stradley',
					handle: 'Seanbud',
					role: 'Co-Founder',
					email: 'seanbud@tipofthehats.org',
					twitter: 'seanbud'
				}, {
					name: 'Kurt Russ',
					handle: 'truktruk',
					role: 'Co-Founder',
					email: 'kurt@tipofthehats.org',
					twitter: 'kurtisruss'
				}, {
					name: 'Jason Baxter',
					handle: 'whisker',
					role: 'Co-Founder',
					email: 'jason@tipofthehats.org',
					twitter: 'rbjaxter'
				}, {
					name: 'William Hild',
					handle: 'Auzzie',
					role: 'Organizer',
					email: 'auzzie@tipofthehats.org',
					twitter: 'auzzietf2'
				}, {
					name: 'Jasmine Ho',
					handle: 'Jasbutts',
					role: 'Merch Coordinator & Artist',
					email: 'jasbutts.toth@gmail.com',
					website: 'http://jasbutts.com/',
					twitter: 'miss_jasbutts'
				}]
			},
			castAndCrew: {
				type: Array,
				readOnly: true,
				value: [{
					name: 'Anthony Oetzmann',
					handle: 'Airon',
					role: 'Audio Engineer',
					email: 'aironaudio@gmail.com',
					twitter: 'airont',
					website: 'http://aironaudio.weebly.com/'
				}, {
					name: 'Ness Delacroix',
					handle: 'uberchain',
					role: 'SFM Artist',
					website: 'http://uberchain.deviantart.com',
					twitter: 'uberchain',
					youtube: 'uberchainYT'
				}, {
					name: 'Ryan Heads',
					handle: 'Krunkidile',
					role: 'SFM Artist',
					twitter: 'krunkidile',
					youtube: 'anangrysockpuppet'
				}, {
					name: 'SedimentarySocks',
					handle: 'SediSocks',
					role: '3D Modeler',
					twitter: ''
				}, {
					name: 'Erin',
					handle: 'erynn',
					role: 'Engineer',
					twitter: 'erynntf2'
				}, {
					name: 'Chris Hanel',
					handle: 'chrishanel',
					role: 'Website/Broadcast Designer',
					website: 'http://supportclass.net/',
					twitter: 'chrishanel'
				}, {
					name: 'Ben Congdon',
					handle: 'bcongdon',
					role: 'Engineer',
					website: 'http://benjamincongdon.me/',
					twitter: 'BenRCongdon'
				}, {
					name: 'Mark',
					handle: 'mark',
					role: 'Audio Engineer',
					twitter: 'M_Schwartzkopf'
				}, {
					name: 'mathsad',
					handle: 'mathsad',
					role: 'Producer'
				}, {
					name: 'Ryan Callard',
					handle: 'loris',
					role: 'Videographer',
					email: 'ryancallardmusic@gmail.com',
					twitter: 'lor_is'
				}]
			},
			thankees: {
				type: Array,
				readOnly: true,
				value: [{
					name: 'Borja Gutierrez',
					handle: 'SirVilleta',
					role: 'Logo Designer'
				}, {
					name: 'Jacko Brain',
					handle: 'omnibombulator',
					role: 'TF2 HUD Designer',
					website: 'http://huds.tf',
					twitter: 'omnibombulator',
					youtube: 'omnibombulator'
				}]
			}
		};
	}

	_calcStaff(selected) {
		switch (selected) {
			case 0: return this.staff;
			case 1: return this.castAndCrew;
			case 2: return this.thankees;
			default: return this.staff;
		}
	}
}

customElements.define(TothPageAbout.is, TothPageAbout);
