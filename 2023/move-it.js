document.addEventListener("DOMContentLoaded", () => {
	function isInPageBounds(el) {
		const x = (Number.parseInt(el.style.left) || 0) < document.body.clientWidth - el.offsetWidth - 20;
		const y = (Number.parseInt(el.style.top) || 0) < document.body.clientHeight - el.offsetHeight - 20;
		return x && y;
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	document.querySelectorAll('a.subject, td.subject a').forEach((el) => {
		el.addEventListener('mouseover', (ev) => {
			ev.target.style.position = 'absolute';
			if (isInPageBounds(ev.target)) {
				let distance = getRandomInt(2, 5);
				ev.target.style.top = ev.clientY + self.pageYOffset + distance + 'px';
				ev.target.style.left = ev.clientX + distance + 'px';
			}
		});
	});
});
