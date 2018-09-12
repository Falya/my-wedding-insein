export default function mobileMenu(classHam = 'header-nav__link', classMenu = 'header-nav-menu'){
	let menu = document.querySelector(`.${classHam}`),
			navMenu = document.querySelector(`.${classMenu}`),
			isDefault = false;

			if (classHam == 'header-nav__link' && classMenu == 'header-nav-menu'){
				isDefault = true;
			}


	menu.addEventListener('click', ()=> {
		console.log('нажал');
		//navMenu.style.display = 'flex'
			if (isDefault) {

				navMenu.classList.toggle('header-nav-menu_active');
				menu.classList.toggle('header-nav__link_active');

			} else {
						navMenu.classList.toggle('header-main-menu_active');
						menu.classList.toggle('header-main__link_active');

			}
			



	});

	navMenu.addEventListener('click', (e) => {
	let target = e.target;
if (isDefault) {

	if (target.hasAttribute('href')) {
		navMenu.classList.toggle('header-nav-menu_active');
			menu.classList.toggle('header-nav__link_active');
	}

} else {
	if (target.tagName == 'LI') {
		navMenu.classList.toggle('header-main-menu_active');
						menu.classList.toggle('header-main__link_active');


	}
}

	
});

let section = document.getElementsByTagName('section')[0];
console.log("section", section);
	section.addEventListener('click', (e) => {
		let target = e.target;
		console.log("target", target);
		if (menu.classList.contains('header-main__link_active')) {
				navMenu.classList.toggle('header-main-menu_active');
						menu.classList.toggle('header-main__link_active');
		}
	});

	window.addEventListener('resize', () => {


let widthB = document.documentElement.clientWidth;
if (menu.classList.contains('header-main__link_active') && widthB > 768) {
				navMenu.classList.toggle('header-main-menu_active');
						menu.classList.toggle('header-main__link_active');
		}
	});


}

