screen = {
	put: function(name, data) {
		var div = $("#content");

		content = '<div class="row">'
		content += '<div class="column one-fifth">'
		content += 'names'
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