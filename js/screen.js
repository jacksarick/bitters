screen = {
	put: function(name, to, data) {
		var div = $("#content");

		content = '<div class="row message">'
		content += '<div class="column one-fourth name">'
		content += name + " → " + to
		content += '</div>'
		content += '<div class="column three-fourths">'
		content += data
		content += '</div>'
		content += '</div>'

		div.append(content);

		// Scroll to bottom
		div.$.scrollTop = div.$.scrollHeight;

	}
}

module.exports = screen