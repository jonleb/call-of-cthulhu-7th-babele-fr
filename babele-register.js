Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'call-of-cthulhu-7th-babele-fr',
			lang: 'fr',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/call-of-cthulhu-7th-babele-fr/img/fvtt-anvil-fr.png";
		
	}
});
