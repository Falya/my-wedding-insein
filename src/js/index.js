import mainPageSlider from './mainPageSlider.js';
import mainPageOverlay from './mainPageOverlay.js';
import mainPageModal from './mainPageModal.js';

document.addEventListener("DOMContentLoaded", () => {
	let loader = document.querySelector('.loader-div');
	loader.classList.add('animated', 'fadeOut');
	if (loader.style.opacity == 0) {
		loader.style.display = 'none';
		document.body.style.overflow = 'visible';
	}
	
	mainPageSlider();
	mainPageOverlay();
	// mainPageModal();

});
