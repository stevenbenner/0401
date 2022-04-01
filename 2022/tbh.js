$(document).ready(() => {
	const tbh = [
		'To be honest',
		'I\'m not going to lie',
		'As it happens',
		'Frankly',
		'With all due respect',
		'To be perfectly honest',
		'I’m just going to come right out and say it',
		'If I can speak my mind',
		'To be frank',
		'Truth to be told',
		'To be quite honest'
	];
	const loopLimit = tbh.length - 1;
	let i = -1;

	function getPrepo(str) {
		i = i < loopLimit ? i + 1 : 0;
		return tbh[i] + ', ' + str;
	}

	$('.post .inner:not(:has(blockquote))').each((i, el) => {
		const $el = $(el);
		$el.html(getPrepo($el.html()));
	});
	$('.post .inner blockquote').each((i, el) => {
		const $el = $(el);
		$el.html(getPrepo($el.html()));
	});
	$('.post .inner:has(blockquote)').each((i, el) => {
		const $el = $(el);
		$el.contents().each((i, c) => {
			if (c.nodeType === 3) {
				c.textContent = getPrepo(c.textContent);
				return false;
			}
		});
	});
});
