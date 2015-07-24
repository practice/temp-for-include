(function() {
		var tags = document.getElementsByTagName('pre');
		var len = 0;
		if (tags !== null) {
				len = tags.length;
		}
		var i = 0;
		for (; i < len; i++) {
				tags[i].className = tags[i].className + " prettyprint";
		}
})();

