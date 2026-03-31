document.addEventListener('DOMContentLoaded', () => {
	var adjective_list = [
		'actual',
		'legit',
		'real',
		'authentic',
		'genuine',
		'true',
		'original',
		'verified',
		'physical',
		'confirmed'
	];

	var noun_list = [
		'human',
		'person',
		'individual',
		'hominid',
		'biped',
		'mortal',
		'creature',
		'life',
		'soul',
		'entity'
	];

	var separator_list = [
		'',
		'_',
		'-',
		' '
	];

	var totalAvatars = 14;

	function stringToNumber(str) {
	    var ret = 0;
	    ret += (str.charCodeAt(0) & 0xff) << 0;
	    ret += (str.charCodeAt(1) & 0xff) << 8;
	    ret += (str.charCodeAt(2) & 0xff) << 16;
	    ret += (str.charCodeAt(3) & 0xff) << 24;
	    return ret;
	}

	function nameToBot(username) {
		var bot_name = '';
		var num = stringToNumber(username);
		var sep = separator_list[num % separator_list.length];
		var adjective = adjective_list[num % adjective_list.length];
		var noun = noun_list[num % noun_list.length];
		return adjective + sep + noun + sep + (num % 10000);
	}

	function getAvatarSrc(username) {
		var num = stringToNumber(username);
		var avatarId = String(num % totalAvatars).padStart(2, '0');
		return '/0401/2026/avatars/' + avatarId + '.jpg';
	}

	document.querySelectorAll('.poster').forEach((element) => {
		var usernameEl = element.querySelector('h4 a');
		var username = usernameEl.innerText;
		var avatarEl = element.querySelector('img.avatar');
		usernameEl.innerText = nameToBot(username);
		if (avatarEl) {
			avatarEl.setAttribute('src', getAvatarSrc(username));
		}
	});

	var quotes = document.querySelectorAll('.post .botslice_quote');
	quotes.forEach((element) => {
		element.innerText = 'Yes, I would be happy to chat about that topic.';
	});

	var emoticons = document.querySelectorAll('.smiley');
	emoticons.forEach((element) => {
		element.remove();
	});

	var posts = document.querySelectorAll('.post .inner');
	posts.forEach((element) => {
		element.innerHTML = element.innerHTML.replace(/\. /, ' — ');
		element.innerHTML = element.innerHTML.replace(/people/, 'humans');
		element.innerHTML = element.innerHTML.replace(/friend/, 'fellow human');
		element.innerHTML = element.innerHTML.replace(/buddy/, 'fellow human');
		element.innerHTML = element.innerHTML.replace(/kid/, 'small human');
		element.innerHTML = element.innerHTML.replace(/children/, 'small humans');
	});
	if (posts.length > 3) {
		posts[3].innerHTML = '<b>You have run out of credits for the month. Please upgrade your account to continue chatting.</b>';
	}
});
