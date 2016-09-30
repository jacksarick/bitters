screen = {
	put: function(data) {
		content = '<div class="row">'
		content += '<div class="column one-fifth">'
		content += 'names'
		content += '</div>'
		content += '<div class="column four-fifths">'
		content += data
		content += '</div>'
		content += '</div>'
		$("#content").append(content);
	}
}

module.exports = screen