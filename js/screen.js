screen = {
	put: function(name, to, data) {
		var div = $("#content");

		content = '<div class="row message">'
		content += '<div class="column one-fifth">'
		content += name + "<br>↳ " + to
		content += '</div>'
		content += '<div class="column four-fifths">'
		content += data
		content += '</div>'
		content += '</div>'

		div.append(content);

		// Scroll to bottom
		div.$.scrollTop = div.$.scrollHeight;

	}
}

module.exports = screen