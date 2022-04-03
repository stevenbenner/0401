var cName = "ap1";

function handleDeleteThread() {
	var c = Cookies.get(cName),
		threads = c ? c.split(":") : [],
		queryString = {},
		threadId = window.location.search.match(/topic=(\d+)/)[1];

	if (threadId) {
		if (threads.indexOf(threadId) === -1) {
			threads.push(threadId);
			Cookies.set(cName, threads.join(":"), { expires: 3 });
		}
		alert("Thread Deleted!");
	}

	return false;
}

function addThreadButton() {
	var listItem = document.createElement("li"),
		span = document.createElement("span"),
		anchor = document.createElement("a"),
		style = "background:#eaa";

	span.setAttribute("style", style);
	span.appendChild(document.createTextNode("Delete Thread"));
	anchor.className = "button_strip_del";
	anchor.href = "#";
	anchor.setAttribute("style", style);
	anchor.onclick = handleDeleteThread;
	anchor.appendChild(span);
	listItem.appendChild(anchor);

	try {
		document.querySelectorAll(".buttonlist ul")[0].insertBefore(listItem, document.querySelectorAll(".buttonlist ul")[0].firstChild);
	} catch (e) {}
}

document.addEventListener("DOMContentLoaded", function() {
	var c = Cookies.get(cName),
		threads = c ? c.split(":") : [];

	threads.forEach(function(threadId) {
		try {
			document.querySelectorAll("#messageindex a[href*=\"" + threadId + "\"]")[0].parentElement.parentElement.parentElement.parentElement.remove();
		} catch(e) {}
		document.querySelectorAll("#ic_recentposts a[href*=\"" + threadId + "\"]").forEach(function(el) {
			try {
				el.parentElement.parentElement.nextElementSibling.remove();
				el.parentElement.parentElement.remove();
			} catch(e) {}
		});
	});

	if (window.location.search.indexOf("topic=") !== -1) {
		addThreadButton();
	}
});
