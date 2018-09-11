export default function whishBook() {
	let tabs = document.querySelector('.location-button'),
			rows = document.getElementsByClassName('row'),
			tab  = tabs.getElementsByTagName('button');

			rows[3].style.display = 'none';

			tabs.parentNode.addEventListener('click', (e) => {
				let target =  e.target;
				
				if (target.getAttribute('id') == 'tab1' && !target.classList.contains('book-active-tab')) {

					rows[3].classList.add('animated', 'fadeOutRight');

					setTimeout(() => {
						rows[3].style.display = 'none';
						rows[2].style.display = '';
						rows[2].classList.remove('animated', 'fadeOutLeft');
					rows[2].classList.add('animated', 'fadeInLeft');
					} ,300);
				} else if(target.getAttribute('id') == 'tab2' && !target.classList.contains('book-active-tab')) {
					rows[2].classList.add('animated', 'fadeOutLeft');
					setTimeout( () => {
						rows[2].style.display = 'none';
						rows[3].style.display = '';
					rows[3].classList.remove('animated', 'fadeOutRight');
					rows[3].classList.add('animated', 'fadeInRight');
					}

						,300)
					
					
				}
				for (let i = 0; i < tab.length; i++) {
					tab[i].classList.remove('book-active-tab');
				}
				target.classList.add('book-active-tab');
			});


	
}