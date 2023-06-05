let navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle('active');
});

const wow = new WOW();
wow.init();

const cu = new counterUp({
	start: 0,
	duration: 2000,
	intvalues: true,
	interval: 100,
});
cu.start();

function scrollTo(element, to = 0, duration = 1000) {
	const start = element.scrollTop;
	const change = to - start;
	const increment = 20;
	let currentTime = 0;
	const animateScroll = () => {
		currentTime += increment;
		const val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if (currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t--;
	return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.querySelector('.scroll-top').onclick = function () {
	scrollTo(document.documentElement);
};
