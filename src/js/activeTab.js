export default function activeTab() {
	let navigation = document.getElementById('navigation'),
			link = navigation.getElementsByTagName('a');
	console.log("navigation", link);

	for (let i = 0; i < link.length; i++) {
			let	href = link[i].getAttribute('href');
		if (location.pathname.match(href)) {
			link[i].parentNode.classList.add('active');
		}
	}

}