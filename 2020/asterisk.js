(function() {
	var count = 1;
	function createAsterisk() {
		var span = document.createElement("span");
		span.className = "asterisk";
		span.appendChild(document.createTextNode("*"));
		return span;
	}
	function showAsterisk() {
		var asterisk = createAsterisk();
		asterisk.setAttribute("style", "cursor: default; position: absolute; top: " + Math.floor(Math.random() * Math.floor(document.body.clientHeight - 20)) + "px; left: " + Math.floor(Math.random() * Math.floor(document.body.clientWidth - 20)) + "px;");
		document.body.appendChild(asterisk);
	}
	document.body.addEventListener("click", function(e) {
		if (e.target && e.target.nodeName === "SPAN" && e.target.className === "asterisk") {
			count = count * 2.4;
			for (var i = 0; i <= count / 2; i++) {
				showAsterisk();
			}
		}
	});
	showAsterisk();
})();
