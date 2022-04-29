$(function() {
	var avat = [
		'0.jpg',
		'1.jpg',
		'2.png',
		'3.jpg',
		'4.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'8.jpg',
		'9.jpg'
	];
	$('.poster h4 a').each(function() {
		var num = this.href.substr(this.href.length - 1),
			avatar = $(this).parents('.poster').find('.avatar');
		if (avatar.length) {
			avatar.attr('src', '/0401/2016/' + avat[num]);
		}
	});
});
