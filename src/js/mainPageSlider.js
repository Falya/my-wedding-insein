export default function mainPageSlider() {
	let slider = document.getElementsByClassName('slider')[0],
			slides = slider.getElementsByClassName('a-slide'),
			sliderDots = document.querySelector('.slick-dots'),
			dot = sliderDots.getElementsByTagName('li'),
			slideIndex = 1;

showSlides(slideIndex);

	function showSlides (n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
			slides[i].classList.remove('animated', 'fadeIn');

		}

		for (let i = 0; i < dot.length; i++) {
			dot[i].classList.remove('slick-active');
		}
		slides[slideIndex - 1].classList.add('animated', 'fadeIn');
		slides[slideIndex - 1].style.display = '';

		dot[slideIndex - 1].classList.add('slick-active');
	}

	function plusSlide (n) {
		showSlides(slideIndex +=n); 
	}

	function currentSlide (n) {
		showSlides(slideIndex = n);
	}

	// let autoSlide = setInterval(() => {
	// 	plusSlide(1);
	// }, 3000);

	sliderDots.addEventListener('click', (e) => {
		let target = e.target;
		console.log("e.target", e.target);

		for (let i = 0; i <= dot.length; i++) {
			if (target.tagName == 'LI' && target == dot[i - 1]) {
				currentSlide(i);
			}
		}
	});
			console.log("slides", slides);

	console.log("slider", slider);

}