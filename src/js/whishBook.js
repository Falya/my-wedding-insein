export default function whishBook() {
	let tabs = document.querySelector('.location-button'),
			tab  = tabs.getElementsByTagName('button'),
			first = document.getElementById('first'),
			second = document.getElementById('second');


			tabs.parentNode.addEventListener('click', (e) => {
				let target =  e.target;
				
				if (target.getAttribute('id') == 'tab1' && !target.classList.contains('book-active-tab')) {

					second.classList.add('animated', 'fadeOutRight');

					setTimeout(() => {
						second.style.display = '';
						first.style.display = '';
						first.classList.remove('animated', 'fadeOutLeft');
					first.classList.add('animated', 'fadeInLeft');
					} ,300);
				} else if(target.getAttribute('id') == 'tab2' && !target.classList.contains('book-active-tab')) {
					first.classList.add('animated', 'fadeOutLeft');
					setTimeout( () => {
						first.style.display = 'none';
						second.style.display = 'block';
					second.classList.remove('animated', 'fadeOutRight');
					second.classList.add('animated', 'fadeInRight');
					}

						,300)
					
					
				}
				for (let i = 0; i < tab.length; i++) {
					tab[i].classList.remove('book-active-tab');
				}
				target.classList.add('book-active-tab');
			});


	
}