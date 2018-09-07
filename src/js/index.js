import mainPageSlider from './mainPageSlider.js'

document.addEventListener("DOMContentLoaded", () => {
	let loader = document.querySelector('.loader-div');
	loader.classList.add('animated', 'fadeOut');
	if (loader.style.opacity == 0) {
		loader.style.display = 'none';
		document.body.style.overflow = 'visible';
	}
	console.log("('opacity')", loader.style.opacity);
	mainPageSlider();

});
