$(document).ready(() => {
	const $img = $('<img/>');

	$img[0].src = '/0401/2024/rick.jpg';
	$img.css({
		'display': 'none',
		'position': 'fixed',
		'top': '0',
		'right': '0',
		'min-width': '100%',
		'min-height': '100%'
	});

	$img.on('load', () => {
		$('body').append($img);
		$img.fadeIn(300, () => {
			$img.fadeOut(300, () => {
				$img.remove();
			})
		});
	});
});
